import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInputText, setGreetingInputText] = useState("Type message");
  const [greetingText, setGreetingText] = useState("Hi!");

  const handledClick = () => {
    setGreetingText(greetingInputText);
  };
  const handleChange = (event) => {
    setGreetingInputText(event.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={handleChange} />
      </div>

      <div className="buttons">
        <button onClick={handledClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
