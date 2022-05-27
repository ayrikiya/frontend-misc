// 2016/12/23
//
// 此为第 14 课的上课内容
//
// 今天上课的主要内容有
//
// JS 的历史现状和未来
// 什么是 ES6 有什么新东西
// CSS 最基础的套路
//
// 不懂的地方稍微做个笔记, 等上课讲解


// 又一次定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

/*
JS 已经 20 年了

现状是各家在瞎搞
typescript
xxscript
jsx

重要的还是编程能力
    简化问题的能力
    快速开发的能力
    解决别人不能解决的问题的能力

'gua' == name

strcmp("gua", name) == 0

var stringEqual = function(a, b) {
    return strcmp(a, b) == 0
}

stringEqual('gua', name)
*/

/*
ES6 的新东西

ES6（ECMAScript 6） 是 JavaScript 的第 6 个版本
为什么要叫 ES6 不叫 JS6 呢
因为你没资格给它取名字



let
const
模板字符串
Set 类型(集合)
Map 类型
...
类似 Python 的解包
函数默认参数
可变参数
箭头函数(这就是个垃圾)
新增函数


var 是以函数为单位限制作用于的修饰符号
var foo = function() {
    if(true) {
        var foo1 = 1
        let foo2 = 2
    }
    log('foo1', foo1)
    log('foo2', foo2)
}

log(foo1)


let
let 就是限制作用域在 {} 内的 var
for(let i = 0; i < 3; i++) {
   log(i)
}
log(i)
// 结果是 undefined

for(var i = 0; i < 3; i++) {
   log(i)
}
log(i)

if(true) {
  let aa = 1
  log(aa)
}
log(aa)

if(true) {
  var a = 1
  log(a)
}
log(a)



const
const 用来声明一个不可赋值的变量
变量的值只能在声明的时候赋予
const a = 1
a = 2 // 错误

// 下面的不是赋值 是操作 所以是可以的
const arr = [1, 2]
arr.push(3)
// [1, 2, 3]


Set
Set 在其他语言里面称为集合
是一种和 Array 相似的数据结构
不同之处在于, Set 中的元素都是不重复的
用法如下

var s = new Set()

// add 方法添加元素, 和 push 一样
s.add(1)
s.add(2)

// has 方法检查元素是否在 set 中
s.has(1) // true
s.has(3) // false

// size 属性相当于 length
s.size  // 2

// delete 方法删除一个元素
s.delete(1)
s.has(1)

s.size  // 1

set 类型的主要作用是去重, 我们作业中
做过的 union 等函数都是 set 的标配
函数, 不过在 js 中需要手动实现那些函数



Map
Map 和 Object 很相似
在其他语言中 通常会有 dict 和 object 两种数据结构
现在 js 也有独立的 dict 那就是 Map(其实没多好用)

用法如下
var m = new Map()

// set 方法增加一个值
m.set('name', 'gua')

// get 属性得到一个值
m.get('name')

// 看起来是比 Object 恶心多了.....

let o = {}
o.name = 'gua'
o.name



...
... 叫扩展符号, 作用是把数组解开成单独的元素
var a1 = [1, 2, 3]
var a2 = [...a1, 4]
// 结果是 [1, 2, 3, 4]

...可以用来传参
var a1 = [1, 2, 3]
log(...a1)
// 相当于 log(1, 2, 3)
// 类似于 log.apply(window, a1)



解包
解包是其他语言(Python) 中学过来的特性, 见下方例子
var [a, b] = [1, 2]
// a b 分别被赋值为 1 2
// 相当于下面的老代码
var arr = [1, 2]
var a = arr[0]
var b = arr[1]
使用这个语法可以一行代码给多个变量赋值
所以也就可以一行代码交换变量值
[a, b] = [b, a]



函数默认参数
函数默认参数我们之前已经直接用过了, 不再讲

var foo = function(a, name='gua') {
    log(a, name)
}


可变参数
用 ... 语法可以实现可变长度的参数
多余的参数会被放进 args 数组中
args 是任意的变量名
var foo = function(a, ...args) {
   log(a, args.length)
}
foo(1, 2, 3, 4)



箭头函数(这就是个垃圾)
箭头函数就是匿名函数定义的简化版, 宣称能使得代码更简洁
实际上就是纯粹的垃圾
箭头函数的 this 值是绑定了的
箭头函数没有 arguments 对象
如果要多参数, 必须用 ...

语法如下
(参数1, 参数2) => { 语句 }
(参数1, 参数2) => 语句
// 上面两行相当于下面这函数
function(参数1, 参数2) {
    return 语句
}

// 如果只有一个参数，圆括号可省略的
(参数1) => { 语句 }
参数1 => { 语句 }

// 但是如果没有参数, 必须需要使用圆括号
() => { 语句 }

// 例子
var a1 = [1, 2, 3]
// 下面两个等价
var a2 = a1.map(function(n){
    return n * n
})
var a3 = a1.map( n => n * n )

n => n * n
// 上面 1 行等价于下面 3 行
function(n) {
    return n * n
}


var foo = function(a) {
    return function(b) {
        return a + b
    }
}
调用方式如下
var c = foo(1)
c(2)
也可以写在一行
foo(1)(2)

上面等价于下面
a => b => a + b


新增函数
新增函数例如 includes 我们早就用过了, 所以不用提

*/
