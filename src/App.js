import React from "react";
import "./index.css";
import SlotM from './SlotMachine';



const App = () => {
  return (
    <>
      <h1 className="heading_style">
        Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
      </h1>
      <div className = "slotmahine">
        <SlotM  x="😄" y="😄"  z="😄"/>
        <SlotM x="😄" y="😄"  z="😄" />
        <SlotM  x="😄" y="😄"  z="🎅"/>

      </div>

    </>
  );
};

export default App;
