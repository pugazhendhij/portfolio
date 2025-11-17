import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      <div className="project-color">
        <section className = "project-section"> 
          <div className="project-header">Projects</div>

          <h3>In-depth Case Studies to show you what I can offer and how I work</h3>
        </section>
      </div>
      <section className="projects-section">
        <h2 className="projects-title">My <span>Projects</span></h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>Clinical Data Automation - Verixa</h3>
            <p>
              Designed and implemented a platform to automate Root Cause Analysis (RCA) and CAPA documentation for clinical trial workflows.
              Developed interactive audit dashboards to help teams monitor compliance, deviations, and risk indicators in real time.
              Built machine learning models to automatically classify and tag clinical trial data, enabling faster and more accurate decision-making across study teams.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>AWS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>DCQC (Data Classification & Quality Compliance Platform)</h3>
            <p>
              Designed a fully serverless architecture to classify TMF (Trial Master File) documents automatically based on predefined study rules.
              Implemented an ML-driven data classification workflow that organizes documents under the correct TMF categories without manual effort.
              Ensured the entire platform met GxP, HIPAA, and GDPR compliance requirements through secure ML pipelines, RBAC, encryption, and automated quality checks.
            </p>
            <div className="tech-stack">
              <span>AWS Serverless</span>
              <span>Python</span>
              <span>DynamoDB</span>
              <span>SQS</span>
              <span>S3</span>
              <span>Openai</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>ATS Platform - Zita</h3>
            <p>
              Integrated OpenAI models to parse resumes, extract skills, and match candidates to job descriptions — improving match accuracy by 40%.
              Built an automated interview scheduler with Google & Outlook Calendar APIs to sync availability, book slots, and send notifications — reducing coordination time by 70%.
              Integrated Stripe payments for subscription billing and added role-based higher-tier features to support SaaS monetization.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>Stripe</span>
              <span>OpenAI</span>
              <span>Google/Outlook Calendar</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <h3>Serverless ATS API</h3>
            <p>
              Designed a fully serverless backend architecture using Lambda and API Gateway, reducing infrastructure costs by 40%.
              Implemented 7 OpenAI-powered features, including resume parsing, candidate scoring, profile summarization, and job-fit analysis — all accessible via REST APIs.
              Improved document processing speed by 35% using S3-based optimized file workflows.
              Added CI/CD automation via GitHub Actions for zero-downtime deployments and integrated Stripe for subscription-based service access.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>React</span>
              <span>OpenAI</span>
              <span>Stripe</span>
              <span>AWS Serverless</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;
