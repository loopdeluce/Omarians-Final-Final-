import { useState, useEffect } from "react";
import { useSound } from "use-sound";
import ding from "../sounds/happybell.wav";

function Countdown() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [breakTimer, setBreakTimer] = useState(false);
  const [play] = useSound(ding, { interrupt: true });

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        } else {
          let minutes = breakTimer ? 24 : 4;
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(minutes);
          setBreakTimer((breakTimer) => !breakTimer);
          play();
        }
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const displayMessage = breakTimer
    ? "Time left in your break: "
    : "Time to focus for: ";

  return (
    <div id="timer-header">
      <h1>{displayMessage}</h1>
      <h1>
        {timerMinutes}:{timerSeconds}
      </h1>
    </div>
  );
}

export default Countdown;
