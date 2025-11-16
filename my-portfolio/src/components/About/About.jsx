import "../About/about.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <div className="about-color">
                <section className="about-section">
                    <div className="about-content">
                        <img
                            src={profile}
                            alt="Profile"
                            className="about-image"
                        />
                        <div className="about-text">
                            <p>
                                Hello, my name is <div className="myname">Pugazhendhi</div> I'm <strong>software engineer</strong> focused
                                specialized in building clean and efficient web applications.
                                I work with Python, Django, React, REST APIs, SQL, AWS, and
                                enjoy creating solutions that are fast, reliable, and user-friendly.
                                I’ve developed end-to-end features like dashboards, authentication
                                systems, job automation modules, and AI-powered data processing.
                                I’m always learning, improving, and building things that matter.
                                Want to know how I may help your project? Check out my <Link to="/projects" className = "link">{" "}project case studies</Link> and <Link to="/resume" className = "link">{" "}resume</Link>.
                            </p>
                            <button className="button-hire"> <Link to="/contact" className = "button-link"> Hire Me</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default About;
