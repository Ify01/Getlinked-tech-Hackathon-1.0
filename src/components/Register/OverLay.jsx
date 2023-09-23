import "./OverLay.css";
import backMan from "../../assets/backman.svg";
import backDone from "../../assets/backdone.svg";
// import emoji from "../../assets/emoji.svg";

const OverLay = () => {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-inner">
          <div className="backdrop-img">
            <div className="backdrop-img-done">
              <img src={backDone} alt="backDone" />
            </div>
            <div className="backdrop-img-man">
              <img src={backMan} alt="backMan" />
            </div>
          </div>

          <div className="backdrop-message">
            <h3>Congratulations</h3>
            <h3>You have successfully Registered!</h3>
          </div>

          <div className="backdrop-mail">
            <p>Yes, it was easy and you did it!</p>
            <p> check your mail box for next step</p>
          </div>

          <div className="backdrop-btn">
            <button>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
