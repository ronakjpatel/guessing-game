import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef(null);
  const dialog = useRef(null);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  function handleStart() {
    setIsTimerStarted(true);
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerStarted ? handleStop : handleStart}>
            {isTimerStarted ? "Stop" : "Start "} Challenge
          </button>
        </p>
        <p className={isTimerStarted ? "active" : undefined}>
          {isTimerStarted ? "Time is running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
