import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // BMI Calculation Logic
  const calcBmi = (event) => {
    event.preventDefault();

    const weightNum = Number(weight);
    const heightNum = Number(height);

    if (weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 25) {
      setMessage("You are underweight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  // Reload page
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>

            <button
              className="btn btn-outline"
              type="button"
              onClick={reload}
            >
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
