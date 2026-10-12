import { FileText, UploadCloud, X } from "lucide-react";

export default function ResumeUpload({ file, onFileChange }) {
  function handleChange(event) {
    const selected = event.target.files?.[0];
    onFileChange(selected || null);
    event.target.value = "";
  }

  return (
    <section className="panel input-panel">
      <div className="panel-heading">
        <div><span className="step-number">01</span><h3>Upload resume</h3></div>
        <span className="file-types">PDF or DOCX</span>
      </div>
      <label className={`dropzone ${file ? "has-file" : ""}`}>
        <input type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleChange} />
        {file ? <FileText size={30} /> : <UploadCloud size={32} />}
        <strong>{file ? file.name : "Choose a resume to upload"}</strong>
        <span>{file ? `${(file.size / 1024).toFixed(0)} KB · Click to replace` : "Drag-and-drop is not enabled; click to browse"}</span>
      </label>
      {file && <button className="remove-file" onClick={() => onFileChange(null)} type="button"><X size={14} /> Remove file</button>}
      <p className="field-hint">Maximum recommended size: 5 MB.</p>
    </section>
  );
}
