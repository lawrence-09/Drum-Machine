import React, { useState, useEffect } from "react";
import "./styles.css";
function App() {
  const [display, setDisplay] = useState("");
  const padBank = [
    {
      key: "Q",
      id: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      id: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      id: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      id: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
    },
    {
      key: "S",
      id: "Clap ",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3",
    },
    {
      key: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Open-HH.mp3",
    },
    {
      key: "Z",
      id: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick-n'-Hat.mp3",
    },
    {
      key: "X",
      id: "Kick ",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick.mp3",
    },
    {
      key: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Closed-HH.mp3",
    },
  ];

  const playSound = (key, soundId) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0; // Rewind to start
      audio.play();
      setDisplay(soundId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toUpperCase(); // Normalize to uppercase
      const pad = padBank.find((p) => p.key === pressedKey);
      if (pad) {
        playSound(pad.key, pad.id);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Cleanup
    };
  }, []);
  return (
    <div id="drum-machine" className="app-container">
      <h1>Drum machine</h1>
      {}
      <div id="display">{display}</div>
      <div className="pad-grid">
        {padBank.map((pad) => (
          <div
            key={pad.key}
            id={pad.id}
            className="drum-pad"
            onClick={() => playSound(pad.key, pad.id)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
