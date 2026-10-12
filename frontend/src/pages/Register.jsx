import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileSearch } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || password.length < 6) {
      setError("Enter your name and email. Password must be at least 6 characters.");
      return;
    }
    // Demo-only registration. Replace with a backend registration endpoint.
    localStorage.setItem("srs_demo_user", JSON.stringify({ name, email }));
    navigate("/");
  }

  return (
    <main className="auth-shell">
      <section className="auth-brand">
        <div className="brand-mark"><FileSearch size={28} /></div>
        <p className="eyebrow">SMART RESUME SCREENER</p>
        <h1>Make screening more structured.</h1>
        <p className="brand-copy">Bring job criteria and candidate skills together with a consistent comparison workflow.</p>
      </section>
      <section className="auth-panel">
        <form className="auth-card" onSubmit={submit}>
          <p className="eyebrow">GET STARTED</p>
          <h2>Create your account</h2>
          <p className="muted">This is a local UI demo; accounts are not stored securely.</p>
          <label>Full name</label>
          <input className="plain-input" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          <label>Email address</label>
          <input className="plain-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" />
          <label>Password</label>
          <input className="plain-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 6 characters" />
          {error && <p className="error-text">{error}</p>}
          <button className="primary-btn full-btn" type="submit">Create account <span>→</span></button>
          <p className="auth-switch">Already registered? <Link to="/login">Sign in</Link></p>
        </form>
      </section>
    </main>
  );
}
