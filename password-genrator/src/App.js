import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  lowercaseLetters,
  uppercaseLetters,
  allnumbers,
  specialCharacters,
} from "./Data/passchar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [specialCharacter, setSpecialCharacter] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [passLen, setPassLen] = useState(10);
  let [finalpassword, setPassword] = useState("");

  let createPassword = () => {
    let charSet = "";
    if (uppercase || lowercase || specialCharacter || numbers) {
      if (uppercase) charSet += uppercaseLetters;
      if (lowercase) charSet += lowercaseLetters;
      if (specialCharacter) charSet += specialCharacters;
      if (numbers) charSet += allnumbers;

      let generatedPassword = "";
      for (let i = 0; i < passLen; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
      }
      setPassword(generatedPassword);
      // alert(`Generated Password: ${generatedPassword}`);
    } else {
      alert("Please select one Checkbox!...");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(finalpassword);
  };

  return (
    <div className="App">
      <>
        <div className="passwordBox">
          <h2>Password Genrator</h2>

          <div className="passwordBoxIn">
            <input type="text" readOnly value={finalpassword} />
            <button onClick={copyPass}>Copy</button>
          </div>

          <div className="passwordLength">
            <label>Password Length</label>
            <input
              type="number"
              max={20}
              min={10}
              value={passLen}
              onChange={(event) => setPassLen(event.target.value)}
            />
          </div>

          <div className="passwordLength">
            <label>Include Uppercase letters</label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
          </div>

          <div className="passwordLength">
            <label>Include Lowercase letters</label>
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
          </div>

          <div className="passwordLength">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
          </div>

          <div className="passwordLength">
            <label>Include Symbols</label>
            <input
              type="checkbox"
              checked={specialCharacter}
              onChange={() => setSpecialCharacter(!specialCharacter)}
            />
          </div>

          <button className="btn" onClick={createPassword}>
            Generate Password
          </button>
        </div>
      </>
    </div>
  );
}

export default App;
