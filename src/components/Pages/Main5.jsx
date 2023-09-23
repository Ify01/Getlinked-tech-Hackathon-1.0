import "./Main5.css";
import man from "../../assets/man think.svg";

const Main5 = () => {
  return (
    <div className="ask-main container" id="FAQ">
      <div className="ask-flex">
        <div className="ask-left">
          <div className="ask-left-text">
            <h2>
              Frequently Ask
              <br />
              <span> Question </span>
            </h2>
          </div>
          <div className="ask-right-text2">
            <p>
              We got answers to the questions that you might <br /> want to ask
              about getlinked Hackathon 1.0
            </p>
          </div>

          <div className="ask-lists">
            <div className="ask-list">
              <p>Can I work on a project I started before the hackathon?</p>
              <span> &#43;</span>
            </div>
            <div className="ask-list">
              <p>What happens if I need help during the hackathon?</p>
              <span> &#43;</span>
            </div>
            <div className="ask-list">
              <p>What happens if I don&apos;t have an idea for a project?</p>
              <span> &#43;</span>
            </div>
            <div className="ask-list">
              <p>Can I join a team or do I have to come with one?</p>
              <span> &#43;</span>
            </div>
            <div className="ask-list">
              <p>What happens after the hackathon ends?</p>
              <span> &#43;</span>
            </div>
            <div className="ask-list">
              <p>Can I work on a project I started before the hackathon?</p>
              <span> &#43;</span>
            </div>
          </div>
        </div>

        <div className="ask-right">
          <img src={man} alt="couple" />
          <h1>?</h1>
          <h2>?</h2>
          <h3>?</h3>
        </div>
      </div>
    </div>
  );
};

export default Main5;
