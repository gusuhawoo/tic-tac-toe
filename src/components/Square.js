import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
  // constructor(props) {
  //   super(props); // super을 this보다 먼저 적어야함 → super키워드를 사용해서 props를 할당 후 this.state사용
  //   // React.Component 객체가 생성될 때 props속성을 초기화하기 위해 부모컴포넌트에게 props를 전달
  //   this.state = { value: null };
  // }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {/* 자식컴포넌트 : props를 받아옴 */}
        {this.props.value}
      </button>
    );
  }
}
