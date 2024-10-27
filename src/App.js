import React, { useState } from "react";
import "./index.css";

function App() {
  const [dob, setDob] = useState(""); // To store the Date of Birth
  const [age, setAge] = useState(null); // To store the calculated age

  // Function to calculate age
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birth month and day haven't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      ageNow--;
    }

    setAge(ageNow);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="calculator">
        <label htmlFor="dob">Enter your date of birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>

      {age !== null && (
        <div className="result">
          <h2>Your Age is: {age} years old</h2>
        </div>
      )}
    </div>
  );
}

export default App;
