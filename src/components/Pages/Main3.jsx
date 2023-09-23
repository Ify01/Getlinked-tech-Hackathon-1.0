import "./Main3.css";
import girl from "../../assets/girl.svg";
import star from "../../assets/star.svg";
import star1 from "../../assets/star (1).svg";


const Main3 = () => {
  return (
    <div
      className="rule-main container"
    >
      <div className="rule-flex">
        <div className="rule-right">
          <div className="rule-right-text">
            <h2>
              Rules and
              <br /> <span>Guidelines</span>
            </h2>
            <div className="rule-star">
              <img src={star} alt="star1" />
            </div>
          </div>
          <div className="rule-right-text2">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>

            <div className="rule-star2">
              <img src={star1} alt="star1" />
            </div>
          </div>
        </div>

        <div className="rule-left">
          <img src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default Main3;
