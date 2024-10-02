import "./DayNightToggle.css";
import { useState, useEffect } from "react";

function DayNightToggle() {
    const [isNight, setIsNight] = useState(false);
  
    useEffect(() => {
      document.body.style.transition = "background-color 2s";
      if (isNight) {
        document.body.style.backgroundColor = "rgb(31, 31, 31)";
      } else {
        document.body.style.backgroundColor = "rgb(240, 240, 240)";
      }
    }, [isNight]);
  
    const toggle = () => {
      setIsNight(prev => !prev);
    };
  
    return (
      <div
        id="switch"
        className={isNight ? "off" : ""}
        onClick={toggle}
        style={{ cursor: "pointer" }} // 增加指針樣式
      >
        <div id="contentwrapper">
          <div id="circle"></div>
  
          <div id="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div id="shtngstarwrapper">
              <div id="shootingstar"></div>
            </div>
          </div>
  
          <div>
            <div className="cloud">
              <div className="cloudpart"></div>
              <div className="cloudpart"></div>
            </div>
            <div className="cloud">
              <div className="cloudpart"></div>
              <div className="cloudpart"></div>
            </div>
            <div className="cloud">
              <div className="cloudpart"></div>
              <div className="cloudpart"></div>
              <div className="cloudpart"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DayNightToggle;
