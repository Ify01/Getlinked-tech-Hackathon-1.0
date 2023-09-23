import "./Contact.css";
import { useRef } from "react";
import x from "../../assets/x.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_89804az",
      "template_crawfn4",
      form.current,
      "wvW2U-iKhzhUN8wLI"
    );
    e.target.reset();
  };
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

              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-flex2-inner2">
                  <input type="text" placeholder="Team Name" required />
                  <input type="text" placeholder="Topic" required/>
                  <input type="email" placeholder="Mail" required/>
                  <textarea name="message" placeholder="Massage" required></textarea>
                </div>

                <div className="contact-btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
