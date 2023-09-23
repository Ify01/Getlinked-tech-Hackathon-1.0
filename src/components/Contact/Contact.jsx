import "./Contact.css";
import x from "../../assets/x.svg";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact-main">
        <div className="contact-flex">
          <div className="contact-flex1">
            <h1>Get in touch</h1>
            <p>Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
            <h2>Share on</h2>
            <div className="contact-socials">
              <i className="bx bxl-instagram"></i>
              <img src={x} alt="x" />
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-linkedin"></i>
            </div>
          </div>

          <div className="contact-flex2">
            <div className="contact-flex2-inner">
              <div className="contact-flex2-inner1">
                <h2>Questions or need assistance?</h2>
                <h2>Let us know about it!</h2>
                <p>Email us below to any question related to our event</p>
              </div>

              <div className="contact-flex2-inner2">
                <input type="text" placeholder="Team Name" />
                <input type="text" placeholder="Topic" />
                <input type="email" placeholder="Mail" />
                <textarea name="message" placeholder="Massage"></textarea>
              </div>

              <div className="contact-btn">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
