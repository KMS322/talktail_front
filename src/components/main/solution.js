import "../../css/solution.css";
import React, { useState } from "react";
const Solution = () => {
  const [click, setClick] = useState("talktail");
  return (
    <div className="solution">
      <div className="text_box">
        <p>
          Pets communicate with their tails, and pet owners connect through
          TalkTail.
        </p>
      </div>
      <div className="article_container">
        <div className="nav">
          <p>Solution</p>
          <hr />
          <p
            onClick={() => {
              setClick("talktail");
            }}
            style={{
              fontWeight: click === "talktail" ? "600" : "400",
              cursor: "pointer",
            }}
          >
            - Talktail
          </p>
          <p
            onClick={() => {
              setClick("tailing");
            }}
            style={{
              fontWeight: click === "tailing" ? "600" : "400",
              cursor: "pointer",
            }}
          >
            - Tailing
          </p>
        </div>
        <div className="article">
          {click === "talktail" ? (
            <img src="/img/solution_talktail.jpg" alt="" />
          ) : (
            <img src="/img/solution_tailing.jpg" alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Solution;
