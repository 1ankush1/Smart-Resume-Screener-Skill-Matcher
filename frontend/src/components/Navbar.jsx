import { FileSearch, LogOut, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("srs_demo_user") || "{}");

  function logout() {
    localStorage.removeItem("srs_demo_user");
    navigate("/login");
  }

  return (
    <header className="topbar">
      <a className="brand" href="/" onClick={e => { e.preventDefault(); navigate("/"); }}>
        <span className="brand-mark small"><FileSearch size={20} /></span>
        <span>smart<span className="brand-accent">screen</span></span>
      </a>
      <nav className="topnav">
        <button className="nav-current" onClick={() => navigate("/")}><LayoutDashboard size={16} /> Dashboard</button>
        <span className="user-pill">{user.name || user.email || "Demo user"}</span>
        <button className="logout-btn" onClick={logout}><LogOut size={16} /> Logout</button>
      </nav>
    </header>
  );
}
