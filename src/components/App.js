import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");

  const handleCalculateButtonClick = () => {
    let firstString = firstName.trim().toLowerCase();
    let secondString = secondName.trim().toLowerCase();

    // Check for valid inputs
    if (firstString === "" || secondString === "") {
      setRelationshipStatus("Please Enter valid input");
      return;
    }

    // Remove common characters
    for (let i = 0; i < firstString.length; i++) {
      let currentChar = firstString.charAt(i);
      if (secondString.includes(currentChar)) {
        firstString = firstString.replace(currentChar, "");
        secondString = secondString.replace(currentChar, "");
        i--;
      }
    }

    // Calculate relationship status
    const lengthSum = firstString.length + secondString.length;
    const status = lengthSum % 6;
   
switch (status) {
      case 1:
        setRelationshipStatus("Friends");
        break;
      case 2:
        setRelationshipStatus("Love");
        break;
      case 3:
        setRelationshipStatus("Affection");
        break;
      case 4:
        setRelationshipStatus("Marriage");
        break;
      case 5:
        setRelationshipStatus("Enemy");
        break;
      default:
        setRelationshipStatus("Siblings");
    }
  };

  const handleClearButtonClick = () => {
    setFirstName("");
    setSecondName("");
   
setRelationshipStatus("");
  };

  return (
    <div id="main">
      <input
        type="text"
        placeholder="Enter First Name"
        data-testid="input1"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Second Name"
        data-testid="input2"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button data-testid="calculate_relationship" onClick={handleCalculateButtonClick}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClearButtonClick}>
        Clear
      </button>
      <h3 data-testid="answer">{relationshipStatus}</h3>
    </div>
  );
}

export default App;
