import "./resume.css";
import { Eye, Download } from "lucide-react";

import resumePDF from "../../assets/Pugazhendhi CV.pdf";

const Resume = () => {
  return (
    <div>
      <div className="resume-color">
        <section className = "resume-section">
          <h1>Resume</h1>
        </section>
      </div>
      <section className="resume-section">
        <div className="resume-container">
          <p className="resume-desc">
            You can view or download my complete resume to learn more about my experience, skills, and project work.
            It highlights my technical expertise in full-stack development, cloud systems, and AI-driven solutions.
          </p>

          <div className="resume-buttons">

            {/* View Button */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-btn"
            >
              <Eye size={16} style={{ marginRight: "6px" }} />
              View Resume
            </a>

            {/* Download Button */}
            <a
              href={resumePDF}
              download="Pugazhendhi-CV.pdf"
              className="btn download-btn"
            >
              <Download size={16} style={{ marginRight: "6px" }} />
              Download PDF
            </a>
          </div>

          {/* Embedded online view */}
          <div className="resume-preview">
            <iframe
              src={resumePDF}
              title="Resume Preview"
              className="resume-iframe"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
