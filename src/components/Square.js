import React from 'react';
import './Square.css';

//1. Props
// const Square = (props) => {
//   <button className="square" onClick={() => props.onClick()}>
//     {/* 자식컴포넌트 : props를 받아옴 */}
//     {props.value}
//   </button>;
// };

// 2. Destructuring
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {/* 자식컴포넌트 : props를 받아옴 */}
      {value}
    </button>
  );
};

export default Square;
