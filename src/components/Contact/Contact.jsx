import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import "./contact.css";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import { Link } from "react-router-dom";

const IconImage = ({ image, text, link }) => {
    return (
        <div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-item"
            >
                <img src={image} alt={text} className="profile-icon" />
            </a>
        </div>
    );
};

const ContactCard = () => {
    return (
        <div className="card-container">
            <div className="contact-container" >
                <p>
                    I’m currently exploring opportunities as a <span><strong> Software Engineer </strong></span>
                    . If you’re interested in working together or hiring me for a project, feel free to reach out using the form below.
                    Want to learn more about my work and what I can offer? Check out my <Link to="/projects" className="resume-link">{" "}project case studies</Link> and <Link to="/resume" className="resume-link">{" "}resume.</Link>
                    You can also connect with me on the platforms listed below.</p>
            </div>
            <div className="profiles-wrapper">

                <IconImage
                    image={Github}
                    text="GitHub"
                    link="https://github.com/pugazhendhij"
                />

                <IconImage
                    image={Gmail}
                    text="Email"
                    link="mailto:pugazhe9202@gmail.com"
                />

                <IconImage
                    image={Linkedin}
                    text="LinkedIn"
                    link="https://www.linkedin.com/in/pugazhendhij92/"
                />

                <IconImage
                    image={Whatsapp}
                    text="WhatsApp"
                    link="https://wa.me/918870054809?text=Hello%20Pugazhendhi"
                />

            </div>
        </div>
    );
};


const Contact = () => {
    const [validEmail, setValidEmail] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        setValidEmail(validator.isEmail(email));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "7a1a6d2d-5be7-41b1-a64e-3931f10084af");
        formData.append("to_email", "pugazhe9202@gmail.com");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setLoading(false);

        if (data.success) {
            toast.success("Message sent successfully!", {
                position: "bottom-left",
                autoClose: 3000,
            });

            // Clear form and validation
            e.target.reset();
            setMessage("");
            setValidEmail(false);
        } else {
            toast.error("Error sending message. Try again!", {
                position: "bottom-left",
            });
        }
    };

    return (
        <div>
            <div className="header-color">
                <h1>Contact</h1>
            </div>

            <ContactCard />
            <div className="contact-container">
                <h2>Get in <span>Touch</span></h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <input
                            placeholder="Your Name"
                            name="name"
                            required
                            className="input"
                        />

                        <input
                            placeholder="Your Email"
                            type="email"
                            name="email"
                            className="input"
                            onChange={(e) => validateEmail(e.target.value)}
                            required
                        />
                    </div>

                    <textarea
                        placeholder="Enter your message"
                        name="message"
                        required
                        className="font-style"
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        className="submit-button"
                        type="submit"
                        disabled={!validEmail || !message || loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                </form>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Contact;
