import React from "react";
import "../Skills/skills.css"

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2 className="skills-title">
          Skill <span>Overview</span>
        </h2>

        <p className="skills-desc">
          I’m a passionate and dedicated developer experienced in building modern,
          responsive, and user-friendly web applications using clean and efficient code.
        </p>

        {/* Cards Row */}
        <div className="skills-row">

          <div className="skill-card">
            <h3>🎨 Frontend Development</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS / Bootstrap</li>
              <li>Responsive UI / UX</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>⚙️ Backend Development</h3>
            <ul>
              <li>Python (Django / Flask)</li>
              <li>Node.js Basics</li>
              <li>REST APIs</li>
              <li>SQL Databases</li>
              <li>SQLite</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>🛠 Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>NPM / PNPM</li>
              <li>AWS (Basic)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
