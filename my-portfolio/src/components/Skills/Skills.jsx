import "../Skills/skills.css"
import { Link } from "react-router-dom";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">

                <h2 className="skills-title">
                    Skill <span>Overview</span>
                </h2>

                <p className="skills-desc">
                    I have over 3 years of experience building modern and scalable web applications using Python, Django, FastAPI, React, AWS, and SQL in API-driven architectures.
Here’s a quick overview of my technical skills and the tools I use to deliver reliable, high-quality solutions. Want to know more about my experience?<br/><br/>
                    <Link to="/resume" className="resume-link">
                        {" "}check out my resume
                    </Link>
                </p>

                {/* Cards Row */}
                <div className="skills-row">

                    <div className="skill-card">
                        <h3>🎨 Frontend Development</h3>
                        <ul>
                            <li>React.js</li>
                            <li>TypeScript</li>
                            <li>HTML5 / CSS3</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3>⚙️ Backend Development</h3>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>FastAPI</li>
                            <li>REST API Development</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3>🛠 Tools, Cloud & Database</h3>
                        <ul>
                            <li>SQL (MySQL, PostgreSQL)</li>
                            <li>AWS</li>
                            <li>Git & GitHub</li>
                            <li>Postman</li>
                            <li>Jira</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;
