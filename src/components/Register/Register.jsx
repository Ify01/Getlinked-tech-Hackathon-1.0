import "./Register.css";
import register from "../../assets/register.svg";
import move1 from "../../assets/1.svg";
import move2 from "../../assets/2.svg";
// import OverLay from "./OverLay";

const Register = () => {
  return (
    <div className="register container">
      <div className="register-main">
        <h3>Register</h3>
        <div className="register-flex">
          <div className="register-flex1">
            <img src={register} alt="register" />
          </div>

          <div className="register-flex2">
            <div className="register-flex2-inner">
              <h2>Register</h2>
              <div className="move">
                <p>Be part of this movement!</p>
                <div className="moving">
                  <img src={move1} alt="move1" />
                  <img src={move2} alt="move2" />
                </div>
              </div>
              <h1>CREATE YOUR ACCOUNT</h1>

              <div className="register-form">
                <div className="register-form1">
                  <div className="team">
                    <label htmlFor="team">Team’s Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="phone">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="register-form2">
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="topic">
                    <label htmlFor="topic">Project Topic</label>
                    <input
                      type="text"
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>

                <div className="register-form2">
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="topic">
                    <label htmlFor="topic">Project Topic</label>
                    <input
                      type="text"
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>

                <div className="register-review">
                  <p>
                    Please review your registration details before submitting
                  </p>
                </div>

                <div className="register-check">
                  <input type="checkbox" />
                  <p>
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>

                <div className="register-btn">
                  <button>Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <OverLay /> */}
    </div>
  );
};

export default Register;
