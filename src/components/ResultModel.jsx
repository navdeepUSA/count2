import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel(
  { targetTime, remainingTime },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>you lost</h2>}
      {!userLost && <h2> your score {score}</h2>}
      <p>
        your target time was <strong>{targetTime}</strong> Seconds
      </p>
      <p>
        you stop the timer with <strong> {formattedRemainingTime}</strong>
        Seconds left
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModel;
