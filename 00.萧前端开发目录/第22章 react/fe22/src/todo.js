import React from 'react';
import './todo.css';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    // 用 bind 来绑定 this
    this.handleChange = this.handleChange.bind(this);
    // 也可以像 handleSubmit 这样用箭头函数绑定 this
    // this.handleSubmit = this.handleSubmit.bind(this);
    // *** 注意
    // state(状态) 是一个特殊的变量, 必须叫这个名字
    // 它用来保存程序运行期间的变量
    // 这里保存了 2 个变量 items 和 text
    this.state = {
        items: [],
        text: '',
    }
  }

  render() {
    // 在外面写好变量到里面去用
    // *** 注意, 这里用了 TodoList 这个组件, 这个组件是我们自定义的
    var buttonTitle = '添加第 ' + (this.state.items.length + 1) + ' 个 todo'
    return (
      <div className="todo-div">
        <h2>TODO</h2>
        <TodoList todos={this.state.items} />
        <div>
          <input onChange={this.handleChange} value={this.state.text} placeholder="输入事项" />
          <button onClick={this.handleSubmit}>{buttonTitle}</button>
        </div>
      </div>
    )
  }

  // 在 input 的 value 改变的时候会被调用
  // 相当于给 input 绑定了 change 事件
  // 你可以 log 一下来查看
  handleChange(e) {
    var state = {
      text: e.target.value
    }
    // items 没有改动, 只改动了 text
    // 所以 setState 只会改变 text
    this.setState(state)
  }

  // 相当于给 button 绑定了 click 事件
  // 用户点击按钮 就会调用这个函数
  // 因为是箭头函数, 所以 this 也是绑定好了的
  handleSubmit = (e) => {
    var i = {
      text: this.state.text,
      // id 是必须要有的一个不重复的数值
      // 所以我们用 Date.now() 来获取一个不重复的数值
      id: Date.now()
    }
    this.setState((prevState) => {
      return {
          // prevState 是上一个 state
          // items 里面存的就是很多个对象
          // 这样做的原因是 react 不希望你直接改变 state
          // 而是重新设置它
          items: prevState.items.concat(i),
          text: ''
      }
    })
  }
}


// TodoList 也是一个组件
class TodoList extends React.Component {
  // 需要注意的是, map 是一个函数, 我们讲过的
  // 上课我会再讲
  // 这个就是用 props 的 todos 生成一个 li 列表
  // TodoApp 的 state 传进来了, 所以是 props
  //
  // 注意, map 循环里面的每个 li 都必须有一个独特的 key 属性
  // 这个规定是 react 为了更新特定的数据的
  // 你现在只需要记住循环/迭代的元素要有这个就行了
  render() {
    return (
      <ul>
        {this.props.todos.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    )
  }
}

module.exports = TodoApp
