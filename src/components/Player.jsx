import { useState ,useRef} from "react";
export default function Player() {
  const player=useRef()
  const [playerName, setplayerName] = useState(null);
  // const [submited, setsubmited] = useState(false);
  // function handleChange(event) {
  //   setsubmited(false);
  //   setplayerName(event.target.value);
  //   console.log(event);
  // }
  function handleClick() {
    // setsubmited(true);
    setplayerName(player.current.value)
    player.current.value="";
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submited ? playerName : "unknown"}</h2> */}
      <h2>Welcome {playerName ??  "unknown"}</h2>
      {/* <h2>Welcome {playerName ?payerName: "unknown"}</h2> */}
      <p>
        <input type="text" ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
