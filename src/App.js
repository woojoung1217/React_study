/*eslint-disable*/
import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목수정] = useState([
    "남자코트추천",
    "강남 맛집",
    "파이썬 독학 ",
  ]);

  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [saleStartDate, setSaleStartDate] = useState(today);

  let [like, setlike] = useState([0, 0, 0]);

  let [modal, setmodal] = useState([false, false, false]);

  let [입력값, 입력값수정] = useState("");

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

            <p>{today}</p>
            <p>
              {dateNow.getHours() + "시" + dateNow.getMinutes() + "분"} 작성{" "}
            </p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목수정(copy);
              }}
            >
              글삭제
            </button>
            {modal[i] == true ? <Modal 글제목={글제목} i={i} /> : null}
          </div>
        );
      })}

      <div className="input">
        <input
          className="center "
          onChange={(e) => {
            입력값수정(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.unshift(입력값);
            글제목수정(copy);
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}
function Modal(props) {
  let [write, setwirte] = useState([]);
  let [input, setinput] = useState("");
  return (
    <div className="modal">
      <h4>제목 : {props.글제목[props.i]}</h4>
      <p>작성자 : 윤우중 </p>
      <input
        className="modal-input"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...write];
          copy.unshift(input);
          setwirte(copy);
        }}
      >
        작성
      </button>
      {write.map(function (a, i) {
        return (
          <div className="li" key={i}>
            {write[i]}
          </div>
        );
      })}
    </div>
  );
}

export default App;
