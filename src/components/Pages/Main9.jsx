import "./Main9.css";
import privacy from "../../assets/privacy.svg";
import secure from "../../assets/secure.svg";

export const Main9 = () => {
  return (
    <div className="privacy container">
      <div className="privacy-flex">
        <div className="privacy-left">
          <div className="privacy-left-top">
            <h1>
              Privacy Policy and <br /> <span>Terms</span>
            </h1>
            <p>Last updated on September 12, 2023</p>
            <h3>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </h3>
          </div>

          <div className="privacy-left-main">
            <div className="privacy-left-inner">
              <h3>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </h3>
              <h4>Licensing Policy</h4>
              <span>Here are terms of our Standard License:</span>
              <div className="privacy-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                </svg>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event.
                </p>
              </div>
              <div className="privacy-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                </svg>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project development.
                </p>
              </div>

              <div className="privacy-btn">
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="privacy-right">
          <div className="secure-icon">
            <img src={secure} alt="secure" />
          </div>
          <div className="secure-human">
            <img src={privacy} alt="privacy" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main9;
