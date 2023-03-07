/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목수정] = useState([
    "남자코트추천",
    "여자코트추천",
    "강남 맛집",
  ]);

  let [like, setlike] = useState(0);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="font-white">blog</div>
      </header>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목수정(copy);
        }}
      >
        글정렬
      </button>

      {modal == true ? <Modal /> : null}

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[0]}
          <span
            onClick={() => {
              setlike(like + 1);
            }}
          >
            👍 {like}
          </span>
        </h4>
        <p>2월17일 발행</p>
      </div>

      <div className="list">
        {modal2 == true ? <Modal2></Modal2> : null}
        <h4
          onClick={() => {
            setModal2(!modal2);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월17일 발행</p>
      </div>
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
function Modal2() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <h1>keyword</h1>
    </div>
  );
}
export default App;

/* 많은 div 를 컴포넌트로 까지 들음 3월5일  */
