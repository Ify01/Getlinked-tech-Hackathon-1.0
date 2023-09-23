import "./Main4.css";
import couple from "../../assets/couple.svg";
import star from "../../assets/star.svg";
import star1 from "../../assets/star (1).svg";
import star3 from "../../assets/star3.svg";

const Main4 = () => {
  return (
    <div className="judge-main container" id="judge">
      <div className="judge-flex">
        <div className="judge-star">
          <img src={star3} alt="star3" />
        </div>
        <div className="judge-star1">
          <img src={star} alt="star" />
        </div>
        <div className="judge-star2">
          <img src={star1} alt="star1" />
        </div>
        <div className="judge-left">
          <img src={couple} alt="couple" />
        </div>
        <div className="judge-right">
          <div className="judge-right-text">
            <h2>
              Judging Criteria <br /> <span>Key attributes</span>
            </h2>
          </div>
          <div className="judge-right-text2">
            <p>
              <span>Innovation and Creativity: </span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p>
              <span>Functionality: </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p>
              <span>Impact and Relevance: </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p>
              <span>Technical Complexity: </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p>
              <span>Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>

            <div className="judge-btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main4;
