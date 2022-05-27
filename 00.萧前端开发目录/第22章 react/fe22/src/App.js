import React, { Component } from 'react';
import './App.css';

import Logo from './logo'
import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'


// 程序的主入口
// class 是 es6 的语法
class App extends Component {
  // constructor 是类初始化后会被自动调用的函数
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    }
  }

  render() {
    // 用一个变量来决定是否显示 timer 组件
    // a ? b : c 是一个三元表达式
    // 意思是 如果 a 是 true， 结果是 b，否则是 c
    var timer = this.state.showTimer ? <Timer /> : null
    return (
      <div className="App">
        <Logo />
        <Message name='gua' />
        <Message name='瓜' />
        <button onClick={this.handleToggleTimer}>开关 timer </button>
        {timer}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
    // *** 需要注意的是, 组件必须 /> 结尾, 规定
  }

  // 这里用了一个箭头函数，目的是指定 this
  handleToggleTimer = (e) => {
    // console.log('handleToggleTimer', this.state.showTimer)
    var show = !this.state.showTimer
    // 我们必须使用 setState 来改变 this.state
    // 然后程序会自动重新调用 render
    this.setState({
        showTimer: show
    })
  }
}

export default App;
