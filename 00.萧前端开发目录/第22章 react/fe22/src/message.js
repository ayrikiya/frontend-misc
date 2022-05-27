import React from 'react';

// 引入自己的 css
import './message.css'


// class 是 es6 中创建对象的语法糖(方便你写程序的语法特性)
// 实际上和以前的是等价的
class Message extends React.Component {
    // render 函数, 这个语法很奇怪, 因为是 es6 定义方法的样子
    // render 函数用来渲染页面
    // props 是属性, 是外面使用的时候传给 Message 的东西
    // 使用的时候是这样用的 <Message name='gua' />
    // {} 里面可以是任意一个 js 语言的表达式
    render() {
        // 一定要注意, return 的东西最外层必须有一个标签
        // 一定要注意, 这个东西虽然看上去像是 html
        // 实际上并不是
        // 这个东西会被 react 转换为 html
        // 所以这里要用 className 而不是 class
        // 这是 jsx 和 react 的规定
        return (
            <div className="message-div">
                <div>Hello {this.props.name}</div>
                <div>大写 {this.props.name.toUpperCase()}</div>
            </div>
        );
    }
}

module.exports = Message
