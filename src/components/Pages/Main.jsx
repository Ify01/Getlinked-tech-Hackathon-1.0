import "./Main.css";
import chain from "../../assets/chain.svg";
import bulb from "../../assets/bulb.svg";
import fire from "../../assets/fire.svg";
import star from "../../assets/star.svg";
import star1 from "../../assets/star (1).svg";
import metrix from "../../assets/metrix 1.svg";
import boy from "../../assets/man.png";
import meta from "../../assets/meta1.png";

const Main = () => {
  
  return (
    <div className="main-cover container">
      <div className="hr-text">
        <h2>Igniting a Revolution in HR Innovation</h2>
        <div className="rainbow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="17"
            viewBox="0 0 255 17"
            fill="none"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>

      <div className="main-flex">
        <div className="main-right">
          <div className="main-blur1"></div>
          <div className="star">
            <img src={star1} alt="star1" />
          </div>
          <div className="star1">
            <img src={star} alt="star" />
          </div>
          <div className="main-right-tech">
            <h1>getlinked</h1>
            <div className="bulb">
              <img src={bulb} alt="boy" />
              <h1>Tech</h1>
            </div>
          </div>
          <div className="main-right-hack">
            <h1>
              Hackathon
              <span>1.0</span>
            </h1>
            <img src={chain} alt="chain" />
            <div className="fire">
              <img src={fire} alt="fire" />
            </div>
          </div>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <button className="main-left-btn">Register</button>

          <div className="star2">
            <img src={star} alt="star" />
          </div>

          <div className="count-down">
            <h3>
              00<span>H</span>
            </h3>
            <h3>
              00<span>M</span>
            </h3>
            <h3>
              00<span>s</span>
            </h3>
          </div>
        </div>

        <div className="main-left-main">
          <div className="main-left">
            <div className="main-left-img">
              <img src={boy} alt="boy" />
            </div>
            <div className="main-left-meta">
              <img src={meta} alt="boy" />
            </div>
            <div className="main-left-dots">
              <img src={metrix} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
