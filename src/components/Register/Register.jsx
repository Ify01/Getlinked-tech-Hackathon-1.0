import "./Register.css";
import register from "../../assets/register.svg";
import move1 from "../../assets/1.svg";
import move2 from "../../assets/2.svg";
import { useEffect, useState } from "react";
// import OverLay from "./OverLay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const baseUrl = "https://backend.getlinked.ai";

const Register = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);

  console.log(values);

  const [email, setEmail] = useState("");
  const [team_name, setTeam] = useState("");
  const [phone_number, setPhone] = useState("");
  const [project_topic, setTopic] = useState("");
  const [group_size, setTotal] = useState("");
  const [privacy_poclicy_accepted, setAccept] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let join = {
      email,
      team_name,
      phone_number,
      project_topic,
      group_size,
      category,
      privacy_poclicy_accepted,
    };

    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(join),
        }
      );

      console.log(JSON.stringify(join));

      if (response.ok) {
        toast.success("Registered successfully");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      toast.error("Failed: " + err.message);
    }

    setEmail("");
    setCategory("");
    setPhone("");
    setTopic("");
    setTotal("");
    setTeam("");
    setAccept("");
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
                      <label htmlFor="text">Team’s Name</label>
                      <input
                        name="team_name"
                        value={team_name}
                        onChange={(e) => setTeam(e.target.value)}
                        type="text"
                        placeholder="Enter the name of your group"
                        id="text"
                        required
                      />
                    </div>
                    <div className="phone">
                      <label htmlFor="number">Phone</label>
                      <input
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        placeholder="Enter your phone number"
                        id="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-form2">
                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email address"
                        id="email"
                        autoComplete="on"
                        required
                      />
                    </div>
                    <div className="topic">
                      <label htmlFor="topic">Project Topic</label>
                      <input
                        name="project_topic"
                        value={project_topic}
                        onChange={(e) => setTopic(e.target.value)}
                        type="text"
                        placeholder="What is your group project topic"
                        id="topic"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-select">
                    <div className="register-form3">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {values.map((opts, i) => (
                          <option key={i}>{opts.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="phone">
                      <label htmlFor="number">Group size</label>
                      <input
                        value={group_size}
                        onChange={(e) => setTotal(e.target.value)}
                        name="group_size"
                        id="size"
                        type="number"
                        min="0"
                        step="1"
                      />
                    </div>
                  </div>

                  <div className="register-review">
                    <p>
                      Please review your registration details before submitting
                    </p>
                  </div>

                  <div className="register-check">
                    <input
                      type="checkbox"
                      name="privacy_policy_accepted"
                      checked={privacy_poclicy_accepted}
                      onChange={(e) => setAccept(e.target.value)}
                      id="check"
                      required
                    />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>

                  <div className="register-btn">
                    <button
                      type="submit"
                      // onClick={() => setPopup(!popup)}
                    >
                      Register Now
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* {popup && (
        <>
          <OverLay setPopup={setPopup} />
        </>
      )} */}
    </div>
  );
};

export default Register;
