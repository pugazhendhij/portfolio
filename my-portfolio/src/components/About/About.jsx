import "../About/about.css";
import profile from "../../assests/profile.jpg"

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
                                Hello, my name is<div className="myname">Pugazhendhi</div> I'm <strong>software engineer</strong> focused
                                on building clean, user-friendly, and responsive web applications.
                                I love solving real-world problems using modern technologies and
                                constantly improving my skills.
                                My journey in development started with curiosity, and it has grown
                                into a strong interest in frontend technologies like React,
                                JavaScript, HTML, and CSS. I enjoy turning ideas into elegant user
                                interfaces.
                                When I’m not coding, I explore new tools, learn best practices, and
                                work on personal projects to sharpen my skills.
                            </p>
                            <button className="button-hire">Hire Me</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
    );
}

export default About;
