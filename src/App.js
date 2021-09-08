import { useState } from "react";
import "./styles.css";

const animalEmojiDictionary = {
  "🐶": "Dog",
  "🐱": "Cat",
  "🐭": "Mouse",
  "🐰": "Rabbit",
  "🐼": "Panda",
  "🐯": "Tiger",
  "🦁": "Lion",
  "🐷": "Pig",
  "🐵": "Monkey",
  "🐄": "Cow"
};

var emojisArray = Object.keys(animalEmojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var emoji = animalEmojiDictionary[userInput];
    if (emoji === undefined) {
      emoji = "Not in database";
    }
    setEmoji(emoji);
  }

  function emojiClickHandler(emoji) {
    var emoji = animalEmojiDictionary[emoji];
    setEmoji(emoji);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Interpreter</h1>
      <input
        onChange={emojiHandler}
        placeholder={"Insert your emoji here"}
        style={{ padding: "1rem" }}
      />
      <h2> {emoji} </h2>
      <h3> Emojis in database </h3>
      {emojisArray.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
