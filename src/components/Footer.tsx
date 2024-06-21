import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo logo">
        <img src="https://lms.giccl.edu.pk/img/logo.png" alt="giccl" />
        <div className="logo_text">
          <h3>GIGCCL</h3>
          <p>Student Portal</p>
        </div>
      </div>
      <hr />
      <div className="footer_container">
        <div className="line">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Academics</li>
            <li>Application</li>
            <li>Learning</li>
            <li>Feedback</li>
          </ul>
        </div>

        <div className="line">
          <h3>Our Community</h3>
          <ul>
            <li>Codex Society</li>
            <li>Islamia College</li>
          </ul>
        </div>

        <div className="line">
          <h3>Social</h3>
          <div className="links">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
      <hr />
      <p className="end">2024 GIGCCL | All rights reserved</p>
    </footer>
  );
};

export default Footer;
