import React from 'react';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
    // 上面的函数相当于下面的函数
    // this.setState(function(ps) {
    //     return {
    //         secondsElapsed: ps.secondsElapsed + 1
    //     }
    // })
  }

  // componentDidMount 会在组件 render 之后执行, 并且永远都只执行一次
  // 这个函数是 react 自带的
  componentDidMount() {
    console.log('定时器组件 did mount')
    // setInterval 的返回值保存下来, 以后可以删掉
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount 会在组件 移除 之后执行, 并且永远都只执行一次
  // 这个函数是 react 自带的
  componentWillUnmount() {
    // 组件被干掉的时候会调用这个函数
    // 所以在这里清掉定时函数
    console.log('定时器组件 will unmount')
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>启动时间: {this.state.secondsElapsed}</div>
    );
  }
}

module.exports = Timer
