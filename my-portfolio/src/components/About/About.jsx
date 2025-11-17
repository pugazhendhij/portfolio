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
                                Hi, I'm <div className="myname">Pugazhendhi 👋</div> a <strong>software engineer {" "}</strong>
                                who loves building clean, efficient, and scalable web applications.
                                I focus on creating fast, reliable, and user-friendly solutions that truly solve problems.
                                I’ve built features like dashboards, authentication flows, automation modules, and AI-powered systems
                                Want to know how I may help your project? Check out my <Link to="/projects" className="link">{" "}project case studies</Link> and <Link to="/resume" className="link">{" "}resume</Link>.
                            </p>
                            <button className="button-hire"> <Link to="/contact" className="button-link"> Hire Me</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default About;
