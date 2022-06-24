import React, { useState } from "react";
import Countdown from "./Countdown";
import pomodomar from "../pictures/pomodomar.jpeg";

function Pomodomar() {
  const [showTimer, setShowTimer] = useState(false);

  function handleTomatoClick() {
    setShowTimer((timer) => !timer);
  }

  return (
    <div id="pomodomar">
      <img
        id="tomato-pic"
        src={pomodomar}
        alt="Tomato Timer Toggle"
        onClick={handleTomatoClick}
      />
      <div id="timer">{showTimer ? <Countdown /> : null}</div>
    </div>
  );
}

export default Pomodomar;
