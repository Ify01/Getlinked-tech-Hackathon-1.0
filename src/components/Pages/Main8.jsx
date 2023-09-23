import "./Main8.css";
import logo1 from "../../assets/Logo 1.svg";
import logo2 from "../../assets/Logo 2.svg";
import logo3 from "../../assets/Logo 3.svg";
import logo4 from "../../assets/Logo 4.svg";
import logo5 from "../../assets/Logo 5.svg";
import logo6 from "../../assets/Logo 6.svg";

const Main8 = () => {
  return (
    <div className="partners container">
      <div className="partners-top">
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div className="partners-flex">
        <div className="partners-flex-main">
          <div className="partners-flex1">
            <div className="logo1">
              <img src={logo1} alt="logo1" />
            </div>
            <div className="logo2">
              <img src={logo2} alt="logo2" />
            </div>
            <div className="logo3">
              <img src={logo3} alt="logo3" />
            </div>
          </div>
          <div className="partners-flex2">
            <div className="logo4">
              <img src={logo4} alt="logo4" />
            </div>
            <div className="logo5">
              <img src={logo5} alt="logo5" />
            </div>
            <div className="logo6">
              <img src={logo6} alt="logo6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main8;
