import "./App.css";
import { useState } from "react";
// import { DayAndNightToggle } from 'react-day-and-night-toggle'

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import DayNightToggle from './DayNightToggle'

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isRough, setIsRough] = useState(false);
  const [isPan, setIsPan] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "green",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "10px",
          paddingLeft: "10px",
          backgroundColor: "#654",
          height: "5%",
        }}
      >
        <h1>PseudoCode2Flow</h1>

        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={() => setDarkMode(!isDarkMode)}
          size={"40"}
        /> */}
        <DayNightToggle/>
        {/* <DayAndNightToggle
      // onChange={ () => setIsDarkMode(!isDarkMode) }
      // checked={ isDarkMode }
    /> */}
      </div>
      <div
        style={{
          height: "92%",
        }}
      >
        <Allotment>
          <div style={{ backgroundColor: "red", height: "100%" }}>
            <h2 style={{paddingLeft:"10px"}}>Mermaid Code</h2>
            <div style={{ backgroundColor: "#522", height: "48%" }}></div>
            <h2 style={{paddingLeft:"10px"}}>Pseudo Code</h2>
            <div style={{ backgroundColor: "#544", height: "48%" }}></div>
          </div>
          <div style={{ backgroundColor: "blue", height: "100%" }}>
            <h2 style={{paddingLeft:"10px"}}>Flowchart</h2>
            <div style={{ backgroundColor: "#566", height: "5%" }}>
              {/* Rough
            <SwitchToggle switchOn={isRough} onPress={() => setIsRough(!isRough)} />
              Pan
            <SwitchToggle switchOn={isPan} onPress={() => setIsPan(!isRough)} /> */}
            </div>
            <div style={{ backgroundColor: "#577", height: "92%" }}></div>
          </div>
        </Allotment>
      </div>
      <div
        style={{
          backgroundColor: "#984",
          height: "3%",
        }}
      >
        Footer
      </div>
    </div>
  );
}

export default App;
