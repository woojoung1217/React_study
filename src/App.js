/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목수정] = useState([
    "남자코트추천",
    "강남우동 맛집",
    "파이썬 독학",
  ]);

  let [like, setlike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="font-white">blog</div>
      </header>
      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
              }}
            >
              {글제목[i]}
            </h4>

            <p>2월 18일 발행</p>
            <span
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setlike(copy);
              }}
            >
              좋아요 👍
            </span>
            {like[i]}
            {modal == true ? (
              <Modal 글제목={글제목} 글제목수정={글제목수정}></Modal>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트추천";
          props.글제목수정(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

/* 많은 div 를 컴포넌트로 까지 들음 3월5일  */
