import "./Main2.css";
import idea from "../../assets/big idea.svg";
import arrow from "../../assets/arrow.svg";
import star from "../../assets/star3.svg";


const Main2 = () => {
  return (
    <div
      className="idea-main container"
    >
      <div className="idea-flex">
        <div className="idea-left">
          <div className="idea-img">
            <div className="star-idea1">
              <img src={star} alt="star" />
            </div>
            <img className="idea-idea" src={idea} alt="idea" />
            <h2>The Big Idea!</h2>
          </div>
          <img className="arrow-idea" src={arrow} alt="idea" />
        </div>
        <div className="idea-right">
          <div className="idea-right-text">
            <h2>
              Introduction to getlinked <br /> <span>techHackathon 1.0</span>
            </h2>
            <div className="star-idea2">
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="idea-right-text2">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
