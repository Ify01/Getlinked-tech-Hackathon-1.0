import "./Contact.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import x from "../../assets/x.svg";

const baseUrl = "https://backend.getlinked.ai";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let join = { email, message, first_name };

    try {
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(join),
      });

      console.log(JSON.stringify(join));

      if (response.ok) {
        toast.success("Message Successfully Sent");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      toast.error("Failed: " + err.message);
    }

    setEmail(" ");
    setMessage(" ");
    setName(" ");
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

              <form onSubmit={handleSubmit}>
                <div className="contact-flex2-inner2">
                  <input
                    value={first_name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    id="name"
                    autoComplete="on"
                    required
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Mail"
                    id="email"
                    autoComplete="on"
                    required
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    placeholder="Massage"
                    id="mess"
                    required
                  ></textarea>
                  <ToastContainer />
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
