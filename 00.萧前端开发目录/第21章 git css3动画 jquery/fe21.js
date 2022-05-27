// 2017/01/07
//
// 此为第 21 课的上课内容
//
// 今天的内容比较杂, 主要是以下 5 点

/*
版本管理软件 git 的介绍与使用
    在群文件中有离线安装包, 先装上, 用法上课会讲
js 的一个有用但难以理解的特性 this 以及它的 3 个关联函数
    apply
    call
    bind
js 的闭包(这只是个名词, 不要去理解名词, 理解它代表的东西)
CSS3 动画的套路
    translate 优先于 rorate
    animationend 事件
        在动画播完后触发
        动画播放被暂停不会触发
    animationiteration 事件
        在动画播放一轮后触发
        如果动画只播放一轮, 那么不会触发此事件
    利用事件测试动画
作业 16 的讲解
    答案在群文件中
一个非常流行的前端开发框架 jQuery
    早期获得了巨大成功
    现在没那么重要了, 但是用来解决问题也很合适
    现在我们用的 DOM API 很多都是从 jQuery 那里抄来的
*/


// this 以及 3 个关联函数
// this 是在程序运行的时候才能确定的
// 谁调用了函数谁就是 this
// 仔细观察下面的例子
var greeting = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
var o1 = {
    name: 'gw',
}
var o2 = {
    name: 'xc',
}
// 让 o1 o2 分别调用
o1.hello = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
o2.hello = function() {
    // 注意, 这个 this.name 取决于谁调用了 greeting() 函数
    console.log('Hi, ', this.name)
}
// 调用者就是函数前面的 . 左边的对象
o1.hello()  // 调用者是 o1
o2.hello()  // 调用者是 o2
// 直接调用 greeting() 函数的话
// 调用者是全局对象
// 浏览器的全局对象是 window
// node.js 中全局对象是 global
// 所以在浏览器中直接调用 greeting() 的话, this 指的是 window
greeting()  // 调用者是 window

// apply call bind 是用来给函数指定 this 用的
// 但是用法稍有区别, 以我们长久以来使用的 log 为例
var log = function() {
    // log 是一个函数
    // js 中的函数是一个对象
    // 所以函数可以有方法
    // apply, call, bind 都是函数的方法, 用来指定 this
    //
    // apply 接受两个参数
    // 第一个参数是函数里面的 this, 这里指定了是 console,
    // 这样就相当于 console.log
    // 第二个参数是要传给函数的参数列表, 类型是 数组, apply 会把数组
    // 拆成一个个的参数传给函数
    // 假设你调用 log(1, 2, 3, 4)
    // 那么 arguments 是 [1, 2, 3, 4] 这样的一个数组
    // (实际上 arguments 不是数组, 但是表现和数组一模一样
    // 你就暂时当它是一个数组)
    // 下面这句就相当于调用 console.log(1, 2, 3, 4)
    console.log.apply(console, arguments)

    // o1.hello.apply(o2)
    // Hi,  xc
    // 如果 console.log 的 this 只能是 console
    // 那么 log 函数写成 console.log(arguments) 这样行么？

    // call 和 apply 类似, 但是小有区别, 如下
    // 第一个参数和 apply 一样
    // 第 2, 3, 4, 5, ... 个参数会依次作为参数传给函数
    console.log.call(console, 1, 2, 3, 4)
    // 上面和下面一模一样
    console.log.apply(console, [1, 2, 3, 4])
}

// bind 函数不直接调用, 而是返回一个函数让你来调用
// 第一个参数是用来指定函数里面的 this, 和 apply call 一样
// 用法就是这样, 返回一个指定了 this 的函数
var log = console.log.bind(console)
log('hello', 1, 2, 3)
// hello 1 2 3

// bind 还可以有额外的参数, 效果如下
// 给返回的函数加上部分参数
var error = console.log.bind(console, '*** ERROR')
// 下面的调用相当于 console.log('*** ERROR', '错误')
error('错误')
// *** ERROR 错误


// js 的闭包(这只是个名词, 不要去理解名词, 理解它代表的东西)
// 习惯一下这种写法, 在函数定义的外面加上圆括号就可以直接调用
// 前端流行这样写, 所以你必须认识这样的写法
var a = (function() {
  var _foo = 1
  return {
    // 返回的这个 object 中, 有 get 和 set 两个函数
    // 这两个函数都引用了 _foo 变量
    // 所以 _foo 变量不会消失, 但别人也访问不到, 这就是所谓的闭包
    get: function(){
      return _foo
    },
    set: function(v){
      _foo = v
    }
  }
})()

console.log('闭包 get', a.get())
a.set('gw')
console.log('闭包 get', a.get())



// CSS3 动画的套路(查看 fe21.html, 主要是定了一套测试动画的方案)
//     translate 优先于 rorate
//     animationend 事件
//         在动画播完后触发
//         动画播放被暂停不会触发
//     animationiteration 事件
//         在动画播放一轮后触发
//         如果动画只播放一轮, 那么不会触发此事件
//     利用事件测试动画



// 一个非常流行的前端开发框架 jQuery
//     早期获得了巨大成功
//     现在没那么重要了, 但是用来解决问题也很合适
//     现在我们用的 DOM API 很多都是从 jQuery 那里抄来的
/*
a. 选择器
1. 普通选择器
2. find
3. closest, parent

b. dom 操作
1. append, prepend
2. remove
3. empty
4. show, hide, toggle

c. class 操作
1. addClass removeClass
2. toggleClass

d. 属性、特性操作
1. attr, prop, data
2. removeAttr

e. 取值
1. val      相当于 .value
2. text     相当于 .innerText
3. html     相当于 .innerHTML

f. 事件
1. on
2. change

g. 数组方法
1. each
2. map
3. grep


h. ajax 封装
1. contentType, dataType
2. beforeSend, complete
*/


// jquery 实现的 chest 页面搜索功能
var input = '<input class=gua-search>'
$('#id-div-chest-title-container').prepend(input)
$('.gua-search').on('keyup', function(event){
    var search = event.target
    var v = search.value
    searchTitle(v)
    // 在所有的 gua-title 中搜索 v
    // 先隐藏所有的 gua-title(添加 gua-hide class)
    // 再把符合搜索结果的 gua-title 删除 gua-hide class
})

var searchTitle = function(v) {
    console.log(v)
}

searchTitle = function(v) {
    // 先隐藏所有的 gua-title(添加 gua-hide class)
    $('.gua-title').hide()
    $('.gua-title').each(function(){
        var title = $(this)
        if (title.text().toLowerCase().includes(v.toLowerCase())) {
            title.show()
        }
    })
}
