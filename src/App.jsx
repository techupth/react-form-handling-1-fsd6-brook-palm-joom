import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("Update Text");
  const [greetingText, setGreetingText] = useState("Greeting Message");

  const handledClick = () => {
    setGreetingText(inputText);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>

      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={handledClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
