import { useState } from "react";
import { AlertCircle, ArrowRight, LoaderCircle, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import JobDescriptionForm from "../components/JobDescriptionForm";
import MatchResults from "../components/MatchResults";
import { analyzeResume } from "../services/api";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAnalyze() {
    setError("");
    setResult(null);
    if (!file) return setError("Please upload a resume first.");
    if (!description.trim()) return setError("Please enter the job description.");
    const allowed = /\.(pdf|docx)$/i.test(file.name);
    if (!allowed) return setError("Only PDF and DOCX files are supported.");
    if (file.size > 5 * 1024 * 1024) return setError("The file is larger than 5 MB.");
    setLoading(true);
    try {
      const data = await analyzeResume(file, description, title);
      setResult(data);
      window.setTimeout(() => document.getElementById("match-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (e) {
      const message = e.response?.data?.message || e.response?.data?.error || e.message;
      setError(`Analysis failed: ${message}. Check that the Spring Boot backend is running on port 8080.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="dashboard-main">
        <section className="welcome-row">
          <div><p className="eyebrow">WORKSPACE / OVERVIEW</p><h1>Resume screening dashboard</h1><p className="muted">Compare candidate experience and skills against your role requirements.</p></div>
          <div className="welcome-icon"><Sparkles size={23} /></div>
        </section>
        <div className="workflow-label"><span>SCREEN A CANDIDATE</span><span className="workflow-line" /></div>
        <div className="input-grid">
          <ResumeUpload file={file} onFileChange={setFile} />
          <JobDescriptionForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
        </div>
        {error && <div className="alert-error"><AlertCircle size={18} /><span>{error}</span></div>}
        <div className="analyze-row"><p>Your resume is analyzed against the requirements you provide.</p><button className="primary-btn analyze-btn" onClick={handleAnalyze} disabled={loading}>{loading ? <><LoaderCircle className="spin" size={18} /> Analyzing...</> : <>Analyze resume <ArrowRight size={18} /></>}</button></div>
        {loading && <div className="loading-note">Extracting document text and comparing skills. This may take a few seconds.</div>}
        <MatchResults result={result} />
        <footer className="footer"> Develop by Manjeet, Ankush, Aniket</footer>
      </main>
    </div>
  );
}
