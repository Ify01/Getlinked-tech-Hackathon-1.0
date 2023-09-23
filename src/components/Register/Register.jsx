import "./Register.css";
import register from "../../assets/register.svg";
import move1 from "../../assets/1.svg";
import move2 from "../../assets/2.svg";
import { useState } from "react";
// import OverLay from "./OverLay";
// import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "https://backend.getlinked.ai";

const Register = () => {
  // const options = [
  //   { value: "1", label: "MOBILE" },
  //   { value: "2", label: "WEB" },
  //   { value: "3", label: "BACKEND" },
  // ];

  // const options1 = [
  //   { value: "1", label: "1" },
  //   { value: "2", label: "2" },
  //   { value: "3", label: "3" },
  //   { value: "4", label: "4" },
  //   { value: "5", label: "5" },
  //   { value: "6", label: "6" },
  //   { value: "7", label: "7" },
  //   { value: "8", label: "8" },
  //   { value: "9", label: "9" },
  //   { value: "10", label: "10" },
  // ];
  // const [category, setCategory] = useState("");
  // const [total, setTotal] = useState("");
  // const [accept, setAccept] = useState("");

  const [team_mate, setTeam] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project_topic, setTopic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let join = { email, team_mate, phone_number, project_topic };

    try {
      const response = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(join),
      });

      console.log(JSON.stringify(join));

      if (response.ok) {
        toast.success("Registered successfully");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      toast.error("Failed: " + err.message);
    }
  };

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

              <form onSubmit={handleSubmit}>
                <div className="register-form">
                  <div className="register-form1">
                    <div className="team">
                      <label htmlFor="team">Team’s Name</label>
                      <input
                        value={team_mate}
                        onChange={(e) => setTeam(e.target.value)}
                        type="text"
                        placeholder="Enter the name of your group"
                      />
                    </div>
                    <div className="phone">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="register-form2">
                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="topic">
                      <label htmlFor="topic">Project Topic</label>
                      <input
                        value={project_topic}
                        onChange={(e) => setTopic(e.target.value)}
                        type="text"
                        placeholder="What is your group project topic"
                      />
                    </div>
                  </div>

                  {/* <div className="register-select">
                    <div className="register-form3">
                      <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        options={options}
                      />
                    </div>
                    <div className="register-form4">
                      <Select
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        options={options1}
                      />
                    </div>
                  </div> */}

                  <div className="register-review">
                    <p>
                      Please review your registration details before submitting
                    </p>
                  </div>

                  {/* <div className="register-check">
                    <input
                      type="checkbox"
                      checked={accept}
                      onChange={(e) => setAccept(e.target.value)}
                    />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div> */}

                  <div className="register-btn">
                    <button>Register Now</button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <OverLay /> */}
    </div>
  );
};

export default Register;
