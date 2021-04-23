import React from "react";
import "./index.css";

const SlotM = () => {
  let x: "1a";
  let y: "1a";
  let z: "1a";

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Matching</h1>

          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
      </h1>
      <SlotM />
    </>
  );
};

export default App;
