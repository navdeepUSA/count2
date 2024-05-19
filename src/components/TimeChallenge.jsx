import { useRef, useState } from "react";
// import ResultModel from "./ResultModel";
import ResultModel from "./ResultModel";

export default function TimeChallenge({ title, targetTime }) {
  const [timeRemaining, settimeRemaining] = useState(targetTime * 1000);
  // const [timerIsactive, settimerIsactive] = useState(false);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if(timeRemaining<=0){
clearInterval(timer.current)
dialog.current.open()
  }
  const dialog = useRef();
  const timer = useRef();
  function startChallenge() {
    // settimerIsactive(true)
    timer.current = setInterval(() => {
      settimeRemaining((previousTime) => previousTime - 10);
    }, 10);
  }
  function stopChallenge() {
    // settimerIsactive(false)
    dialog.current.open()
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModel
      ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timeRemaining <= 0 && <p>you lost</p>}
        <p className="challenge-time">{targetTime} second</p>
        <p>
          <button onClick={timerIsActive ? stopChallenge : startChallenge}>
            {timerIsActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p>{timerIsActive ? "time is runnning" : "timer inactive"}</p>
      </section>
    </>
  );
}
