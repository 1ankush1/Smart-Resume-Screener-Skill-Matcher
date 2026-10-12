import { CheckCircle2, XCircle, Target } from "lucide-react";

export default function MatchResults({ result }) {
  if (!result) return null;
  const score = Number.isFinite(result.matchPercentage) ? result.matchPercentage : 0;

  return (
    <section className="results-section" id="match-results">
      <div className="section-title-row">
        <div><p className="eyebrow">ANALYSIS REPORT</p><h2>Match results</h2></div>
        <span className="result-tag"><Target size={15} /> Analysis complete</span>
      </div>
      <div className="score-panel panel">
        <div className="score-copy"><span className="score-label">RESUME MATCH SCORE</span><div className="score-number">{score}<span>%</span></div><p>{result.summary || "Score based on overlap between extracted resume skills and job requirements."}</p></div>
        <div className="score-ring" style={{ "--score": `${score}%` }}><div><strong>{score}%</strong><span>match</span></div></div>
      </div>
      <div className="skills-grid">
        <section className="panel skills-panel">
          <div className="skills-heading"><CheckCircle2 size={19} /><h3>Matched skills</h3><span>{result.matchedSkills?.length || 0}</span></div>
          {result.matchedSkills?.length ? <ul className="skill-list matched">{result.matchedSkills.map(skill => <li key={skill}><CheckCircle2 size={16} />{skill}</li>)}</ul> : <p className="empty-state">No matching skills detected.</p>}
        </section>
        <section className="panel skills-panel">
          <div className="skills-heading missing-heading"><XCircle size={19} /><h3>Missing skills</h3><span>{result.missingSkills?.length || 0}</span></div>
          {result.missingSkills?.length ? <ul className="skill-list missing">{result.missingSkills.map(skill => <li key={skill}><XCircle size={16} />{skill}</li>)}</ul> : <p className="empty-state">No missing required skills detected.</p>}
        </section>
      </div>
      <section className="panel candidate-panel">
        <div className="panel-heading"><div><span className="step-number">03</span><h3>Candidate details</h3></div><span className="muted small-text">Extracted from resume text</span></div>
        <div className="candidate-grid">
          <div className="candidate-item"><span>Experience</span><strong>{result.experience || "Not detected"}</strong></div>
          <div className="candidate-item"><span>Education</span><strong>{result.education || "Not detected"}</strong></div>
          <div className="candidate-item wide"><span>Extracted skills</span><strong>{result.extractedSkills?.length ? result.extractedSkills.join(", ") : "No skills detected"}</strong></div>
        </div>
        <p className="disclaimer">This score is a keyword-overlap indicator, not a hiring recommendation. Review the original resume and assess candidates fairly.</p>
      </section>
    </section>
  );
}
