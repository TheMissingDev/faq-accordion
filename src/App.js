import { useState } from "react";
import "./App.css";
import star from "./faq-accordion-main/assets/images/icon-star.svg";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [Index, setIndex] = useState(null);

  const handleClick = (id) => {
    setIndex(id)
    setIsActive(true)
  };

  return (
    <>
      <div className="accordion">
        <div className="imgTex">
          <img src={star} alt="icon-star.svg" />
          <h1>FAQs</h1>
        </div>
        <div
          onClick={() => handleClick(1)}
          className={`contentBx ${Index == null ? "active" :  Index == 1 ? "active" : "" }`}
        >
          <div className="label">
            What is Frontend Mentor, and how will it help me?
          </div>
          <div className="content">
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </div>
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`contentBx ${isActive && Index == 2 ? "active" : ""}`}
        >
          <div className="label">Is Frontend Mentor free?</div>
          <div className="content">
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </div>
        </div>
        <div
          onClick={() => handleClick(3)}
          id={3}
          className={`contentBx ${isActive && Index == 3 ? "active" : ""}`}
        >
          <div className="label">
            Can I use Frontend Mentor projects in my portfolio?
          </div>
          <div className="content">
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </div>
        </div>
        <div
          onClick={() => handleClick(4)}
          id={4}
          className={`contentBx ${isActive && Index == 4 ? "active" : ""}`}
        >
          <div className="label">
            How can I get help if I'm stuck on a Frontend Mentor challenge?
          </div>
          <div className="content">
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
