import "./Footer.css";
import x from "../../assets/x.svg";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-inner">
        <div className="footer-flex">
          <div className="footer-flex1">
            <h1>
              get<span>linked</span>
            </h1>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="terms">
              <h3>Terms of Use </h3>
              <span>Privacy Policy</span>
            </div>
          </div>

          <div className="footer-flex2">
            <p>Useful Links</p>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="follow">
              <p>Follows us</p>
              <div className="socials">
                <i className="bx bxl-instagram"></i>
                <img src={x} alt="x" />
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="footer-flex3">
            <h3>Contact Us</h3>
            <div className="call">
              <i className="uil uil-phone-volume"></i>
              <p>+234 679 81819</p>
            </div>
            <div className="address">
              <i className="uil uil-map-marker"></i>
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
