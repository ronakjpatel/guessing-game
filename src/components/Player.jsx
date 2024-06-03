import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");

  const playerNameRef = useRef();

  const handleClick = () => {
    if (playerNameRef.current.value != "") {
      setPlayerName(playerNameRef.current.value);
    }
  };

  return (
    <section id="player">
      <h2>Welcome {!playerName ? "unknown entity" : playerName + " !!!"}</h2>
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={() => handleClick()}>Set Name</button>
      </p>
    </section>
  );
}
