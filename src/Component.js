import "./styles.css";
import { useState } from "react";
import { Frequency } from "react-frequency";

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

export default function Component() {
  const [start, setStart] = useState(false);
  const [type, setType] = useState("center");
  const [gain, setGain] = useState(100);
  const [frequency, setFrequency] = useState(174);
  const [oscillator, setOscillator] = useState(oscillatorValues[0]);

  const handleToggle = () => {
    setStart((s) => !s);
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

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
        <h1 className={start ? "listen" : ""}>
          <span className={start && type === "right" ? "white" : ""}>
            react
          </span>
          -
          <span className={start && type === "left" ? "white" : ""}>
            frequency
          </span>
        </h1>
        <h2 style={{ margin: 0 }}>Component</h2>
        <h2>Start to listen frenquency!</h2>
        {start && (
          <Frequency
            type={type}
            gain={gain / 100}
            hz={frequency}
            oscillator={oscillator}
          />
        )}
        <div>
          <button className={start ? "bg" : "bgWhite"} onClick={handleStart}>
            START
          </button>
          <button className="bgWhite" onClick={handleToggle}>
            TOGGLE
          </button>
          <button className={!start ? "bg" : "bgWhite"} onClick={handleStop}>
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
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
