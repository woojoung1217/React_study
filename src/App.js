/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목수정] = useState([
    "남자코트추천",
    "강남 맛집",
    "파이썬 독학 ",
  ]);

  let [like, setlike] = useState([0, 0, 0]);

  let [modal, setmodal] = useState([false, false, false]);

  return (
    <div className="App">
      <div className="header">
        <h4 className="font-white">React Blog </h4>
      </div>
      {글제목.map(function (arg, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                let copy = [...modal];
                copy[i] = !modal[i];
                setmodal(copy);
              }}
            >
              {글제목[i]}
            </h4>

            <span
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setlike(copy);
              }}
            >
              좋아요 😃 {like[i]}
            </span>
            <p>2월17일 발행</p>
            {modal[i] == true ? <Modal 글제목={글제목} i={i} /> : null}
          </div>
        );
      })}
      <input onChange={(e) => {}}></input>
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>제목 : {props.글제목[props.i]}</h4>
      <p>작성자 : 윤우중 </p>
    </div>
  );
}

export default App;
