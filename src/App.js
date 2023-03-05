import { useState } from "react";
import "./App.css";
/*eslint-disable*/

function App() {
  let [text, settext] = useState(["강남", "서울", "동탄 "]);
  let [count, setcount] = useState(0);
  let [hate, sethate] = useState(0);
  return (
    <div className="App">
      <header className="header">
        <div className="font-white">blog</div>
      </header>
      <div className="list">
        <h4>
          {text[0]}{" "}
          <span
            onClick={() => {
              setcount(count + 1);
            }}
          >
            👍
          </span>{" "}
          {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{text[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{text[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
