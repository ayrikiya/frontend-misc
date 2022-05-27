// 2016/12/15
//
// 此为第 11 课的上课内容
//
// 今天上课的主要内容有
//
// 类 与 面向对象 (OO, Object Oriented)
// js 的大坑 this 关键字
// 更好的 ajax 封装(用 object 当参数, 用 OO 的方式来封装 todo api)
//
// 应该能看懂一部分, 不懂的稍微做个笔记, 等上课讲解

// a = 1
// b = 111

// 又一次定义我们的 log 函数
var log = function() {
    var a = 111
    b = 222
    console.log.apply(console, arguments)
}


//
// =====
// 类 与 面向对象
// =====
//
// 语言自带的数据类型有限, 要表示复杂的数据, 必须有复杂的数据类型
// 我们可以用对象表示复杂类型
//
// 类, 就是语言提供的自定义数据类型的机制, 也就是自定义对象
// 例子如下
//

// 在一些语言中会有 class 关键字来声明 类
// 但是 js 的处理方式并不是 class, 而是下面这种
// 虽然看上去很怪异, 但无非是个套路罢了
//
// Student 是类名, 一般首字母大写(驼峰命名法(搜))
// 类看起来就是一个函数而已
var Student = function(name, height) {
    // 用 this.变量名 来创造一个只有类的实例才能访问的变量
    this.name = name
    this.height = height
}

// 使用方式如下
// 用 new 函数名(参数) 初始化一个类的实例
// 赋值给 s1
// 这时候 s1 引用的是一个 Student 类型(也就是对象 Student 的实例)
// 也称之为 对象
var s1 = new Student('gua', 169)

// 可以通过 . 语法访问对象的属性(也就是函数中
// 用 this.变量名 创造的变量)
// 类的变量叫做 属性(单纯只是叫法不同)
log('class, s1', s1.name, s1.height)


// ==
// 可以改变 s1 的属性
s1.name = 'xiaogua'
s1.height = 1.69
log('class, s1 属性', s1.name, s1.height)
// 输出如下
// class, s1 属性 xiaogua 1.69

// ==
// 可以创建多个互相独立的实例
var s2 = new Student()
var s3 = new Student()
s2.name = 'gau II'
s3.name = '三代瓜'
log(s2.name, s3.name)


// =
// 可以给类增加一些方法(函数)
// 给类定义方法(想想标准库中 String 类的 length )
// prototype 在这里是一个套路, 上课会解释
Student.prototype.greeting = function() {
    console.log(`hello, I'm ${this.name}`)
}

Student.prototype.update = function(name, age) {
    this.name = name
    this.age = age
}

// 可以调用实例的方法
s1.greeting()

// 调用 update 方法
s1.update('xiao', 169.98)
// 实际上相当于
// Student.update(s1, 'xiao', 169.98)

s1.greeting()


// =
// 封装, 上面 greeting 和 update 就是封装的例子
// 意思是说把一些操作做好, 对外部来说只需要简单调用即可
//


// =
// 类主要的优势就是 可批量制造 object 和 可封装方法
// 其他上课要讲的杂项
// this 等, 比较复杂, 需要上课讲
// if 的时候的类型, 不能用隐式, if(a) 这样是不行的 必须明确
//
// var age = 1
// if (age != 0) {
//     log('hello')
// }


// var s1 = {
//     name: 'gua',
//     height: 169,
// }
//
// var s2 = {
//     name: 'xiaogua',
//     height: 1.69,
// }


// this 的赋值
// window 作为全局变量
// 全局变量
