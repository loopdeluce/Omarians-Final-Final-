import React, { useState } from "react";
import Countdown from "./Countdown";

function Pomodomar() {
  const [showTimer, setShowTimer] = useState(false);

  function handleTomatoClick() {
    setShowTimer((timer) => !timer);
  }

  return (
    <div id="pomodomar">
      <img
        id="tomato-pic"
        src="https://media.istockphoto.com/photos/tomato-picture-id174930196?b=1&k=20&m=174930196&s=170667a&w=0&h=7Ayjl-bZSpI4vwYq5DvZhARmOhw1IiMzhdyjOswlhIs="
        alt="Tomato Timer Toggle"
        onClick={handleTomatoClick}
      />
      <div id="timer">{showTimer ? <Countdown /> : null}</div>
    </div>
  );
}

export default Pomodomar;
