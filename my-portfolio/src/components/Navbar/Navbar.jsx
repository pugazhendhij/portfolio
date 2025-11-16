import { useNavigate } from "react-router-dom";
import "../Navbar/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>About</li>
        <li onClick={() => navigate("/projects")}>Project</li>
        <li onClick={() => navigate("/resume")}>Resume</li>
        <li onClick={() => navigate("/contact")}>Contact</li>

      </ul>
    </nav>
  );
}

export default Navbar;
