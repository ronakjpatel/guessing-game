import React, { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainigTime, onReset },
  ref
) {
  const userLost = remainigTime <= 0;
  const formattedTime = (remainigTime / 1000).toFixed(2);
  const score = Math.round((1 - remainigTime / (targetTime * 1000)) * 100);
  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You Lost! </h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        {" "}
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        {" "}
        You stopped the timer with{" "}
        <strong>{formattedTime} second(s) left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
