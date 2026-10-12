import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileSearch, LockKeyhole, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }
    // Demo-only sign-in. Replace with a real backend authentication endpoint.
    localStorage.setItem("srs_demo_user", JSON.stringify({ email }));
    navigate("/");
  }

  return (
    <main className="auth-shell">
      <section className="auth-brand">
        <div className="brand-mark"><FileSearch size={28} /></div>
        <p className="eyebrow">SMART RESUME SCREENER</p>
        <h1>Find the right match, faster.</h1>
        <p className="brand-copy">Compare candidate resumes with job requirements in one clear workspace.</p>

        <div className="brand-stat"><strong>Team Member <br/>Manjeet → Ankush → Aniket</strong></div>
      </section>
      <section className="auth-panel">
        <form className="auth-card" onSubmit={submit}>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>Sign in</h2>
          <p className="muted">Use any email and password for this frontend demo.</p>
          <label>Email address</label>
          <div className="input-with-icon"><Mail size={18} /><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" /></div>
          <label>Password</label>
          <div className="input-with-icon"><LockKeyhole size={18} /><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" /></div>
          {error && <p className="error-text">{error}</p>}
          <button className="primary-btn full-btn" type="submit">Sign in <span>→</span></button>
          <p className="auth-switch">New to the screener? <Link to="/register">Create an account</Link></p>
          <p className="demo-note">Demo authentication only — do not use real credentials.</p>
        </form>
      </section>
    </main>
  );
}
