import "./Main7.css";
import medal from "../../assets/medal img.svg";
import silver from "../../assets/silver.png";
import gold from "../../assets/gold.png";
import bronze from "../../assets/bronze.png";

const Main7 = () => {
  return (
    <div className="medal container">
      <div className="medal-top-flex">
        <div className="medal-top1"></div>
        <div className="medal-top2">
          <h2>
            Prizes and <br /> <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for <br /> winners and for
            participants.
          </p>
        </div>
      </div>

      <div className="medal-main-flex">
        <div className="medal-main-flex1">
          <img src={medal} alt="medal" />
        </div>
        <div className="medal-main-flex2">
          <div className="medal-main-silver">
            <img src={silver} alt="silver" />
            <h1>2nd</h1>
            <h2>Runner</h2>
            <h3>N300,000</h3>
          </div>
          <div className="medal-main-gold">
            <img src={gold} alt="gold" />
            <h1>1st</h1>
            <h2>Runner</h2>
            <h3>N400,000</h3>
          </div>
          <div className="medal-main-bronze">
            <img src={bronze} alt="bronze" />
            <h1>3rd</h1>
            <h2>Runner</h2>
            <h3>N150,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main7;
