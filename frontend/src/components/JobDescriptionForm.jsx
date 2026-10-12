import { ClipboardList } from "lucide-react";

export default function JobDescriptionForm({ title, setTitle, description, setDescription }) {
  return (
    <section className="panel input-panel">
      <div className="panel-heading">
        <div><span className="step-number">02</span><h3>Job description</h3></div>
        <ClipboardList size={20} className="heading-icon" />
      </div>
      <label className="field-label" htmlFor="job-title">Job title</label>
      <input id="job-title" className="plain-input" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Java Backend Developer" />
      <label className="field-label" htmlFor="job-description">Requirements and responsibilities</label>
      <textarea id="job-description" className="job-textarea" value={description} onChange={e => setDescription(e.target.value)} placeholder="Paste the job description, required skills, qualifications and experience..." />
      <p className="field-hint">Include specific skills and requirements for a more useful comparison.</p>
    </section>
  );
}
