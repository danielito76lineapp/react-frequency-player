import "./index.css";
import { useState } from "react";
import { useFrequency } from "react-frequency";

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

export default function Hook() {
  const [type, setType] = useState("center");
  const [gain, setGain] = useState(100);
  const [frequency, setFrequency] = useState(174);
  const [oscillator, setOscillator] = useState(oscillatorValues[0]);

  const { toggle, start, stop, playing } = useFrequency({
    hz: frequency,
    type,
    gain: gain / 100,
    oscillator
  });

  const handleType = (t) => {
    setType(t);
  };

  const handleGain = (e) => {
    setGain(e.target.value);
  };

  const handleFrequency = (e) => {
    setFrequency(e.target.value);
  };

  const handleOscillator = (e) => {
    setOscillator(e.target.value);
  };

  return (
    <div className="container">
      <div className="frequency">
        <h1 className={playing ? "listen" : ""}>
          <span className={playing && type === "right" ? "white" : ""}>
            react
          </span>
          -
          <span className={playing && type === "left" ? "white" : ""}>
            frequency
          </span>
        </h1>
        <h2 style={{ margin: 0 }}>Hook</h2>
        <h2>Start to listen frenquency!</h2>
        <div>
          <button className={playing ? "bg" : "bgWhite"} onClick={start}>
            START
          </button>
          <button className="bgWhite" onClick={toggle}>
            TOGGLE
          </button>
          <button className={!playing ? "bg" : "bgWhite"} onClick={stop}>
            STOP
          </button>
        </div>
        <div>
          <button
            className={type === "left" ? "bg" : "bgWhite"}
            onClick={() => handleType("left")}
          >
            LEFT
          </button>
          <button
            className={type === "center" ? "bg" : "bgWhite"}
            onClick={() => handleType("center")}
          >
            CENTER
          </button>
          <button
            className={type === "right" ? "bg" : "bgWhite"}
            onClick={() => handleType("right")}
          >
            RIGHT
          </button>
        </div>
        <div className="input-group">
          <div>
            <input type="number" onChange={handleFrequency} value={frequency} />
            <span>Hz</span>
          </div>
          <div>
            <input type="number" onChange={handleGain} value={gain} />
            <span>Volume</span>
          </div>
        </div>
        <input
          type="range"
          onChange={handleFrequency}
          value={frequency}
          min="20"
          max="20000"
        />
        <label>Oscillator</label>
        <select onChange={handleOscillator} value={oscillator}>
          {oscillatorValues.map((type, i) => (
            <option value={type} key={`${type}-${i}`}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
