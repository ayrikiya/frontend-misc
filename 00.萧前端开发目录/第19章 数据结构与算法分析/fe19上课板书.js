// 2017/01/03
//
// 此为第 19 课的上课内容
//
// 今天的内容是
//
// 接下来的内容讲解
// 数据结构与算法分析

/*
数据结构就是存储数据的方式
算法是有特定的套路的

上课会详细讲解
*/

var log = function(){
    console.log.apply(console, arguments)
}

// 队列结构
// 主要有 2 个操作
// enqueue dequeue
//
var Queue = function() {
    // data 是存储元素的数组
    this.data = []
}

// 入队
Queue.prototype.enqueue = function (element) {
    this.data.push(element)
}

// 出队
Queue.prototype.dequeue = function () {
    return this.data.splice(0, 1)[0]
}

// 队列长度
Queue.prototype.length = function () {
    return this.data.length
}

// 清空队列
Queue.prototype.empty = function() {
    this.data = []
}

// var q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// log('length', q.length())
// log(q.dequeue())
// q.enqueue(4)
// log(q.dequeue())
// log(q.dequeue())
// log(q.dequeue())


// Stack 栈
// 常见的 3 个操作
// push pop top
//
var Stack = function() {
    this.data = []
}

// push 添加一个元素
Stack.prototype.push = function(e) {
    this.data.push(e)
}

// pop 删除并返回最新添加的元素
Stack.prototype.pop = function() {
    var index = this.data.length - 1
    return this.data.splice(index, 1)[0]
}

// top 仅返回最新添加的元素
Stack.prototype.top = function() {
    var index = this.data.length - 1
    return this.data[index]
}

var s = new Stack()
s.push('hello')
s.push('world')
log(s.pop())
log(s.pop())

var str = 'hello'
for (var i = 0; i < str.length; i++) {
    s.push(str[i])
}

var str1 = ''
for (var i = 0; i < str.length; i++) {
    str1 += s.pop()
}
log(str1)

/*
((1 + 2) * 3)
作业 验证括号匹配
*/



// 链表
// LinkedList
// [1, 2, 3, 4, 15, 16, 27]
// [1, 2, 3, 0, 4, 5, 6, 7]
// 时间、空间复杂度
// 复杂度是对一个操作的大致估计
// 复杂度从小到大依次如下
/*
五种常见时间复杂度
O(1)    常数复杂度，比如在数组的最后增加一个元素
        或者 读取数组的第一个元素
        或者 读取链表的第 100 个元素
O(logN) 比如二分搜索， 常用于有序列表的查找
O(n)    从头到尾的遍历， 比如给数组中每个数字加 1
O(NlogN)两个有序列表，求交集，用二分搜索
O(N²)   两个列表求交集

空间复杂度
O(1)    在一个数组中 找到最大的元素并返回
O(n)    复制一个数组并返回
*/


// 链表实现
//
var Node = function(e) {
    this.element = e
    this.next = null
}

// var n1 = new Node(1)
// var n2 = new Node(2)
// var n3 = new Node(3)
// n1.next = n2
// n2.next = n3
//
// var n = n1
// while(n != null) {
//     log('遍历链表', n.element)
//     n = n.next
// }

var LinkedList = function() {
    this.head = new Node()
    this._length = 0
}

// 在链表末尾增加一个元素
LinkedList.prototype.append = function(e) {
    var node = new Node(e)
    var n = this.head
    while(n.next != null) {
        n = n.next
    }
    n.next = node
    //
    this._length++
}

// 返回一个元素的 index
LinkedList.prototype.indexOf = function(e) {
    var index = -1
    var n = this.head
    var i = 0
    while(n.next != null) {
        if (e === n.element) {
            index = i
            break
        }
        n = n.next
        i++
    }
    return index
}

// 返回链表的长度
LinkedList.prototype.length = function() {
    return this._length
}

LinkedList.prototype.log = function() {
    var n = this.head.next
    log('遍历链表')
    while(n != null) {
        log(' > ', n.element)
        n = n.next
    }
}

var list = new LinkedList()
list.append('hello')
list.append('gua')
list.append('你好')
list.log()
log(list.length())

/*
面向对象 多态 继承 大致讲一下

多态
在某些语言里面 比如 java
你函数定义的参数必须有类型 类型不匹配就是错误的
var add = function(a, b) {
    return a + b
}

// 在其他语言里面可能是这样的 比如 java c
var add = function(int:a, int:b) {
    return a + b
}

add(1.1, 2.2)
// 报错， 类型不匹配

var add = function(float:a, float:b) {
    return a + b
}

add(1.1, 1)

var add = function(int:a, float:b) {
    return a + b
}

var add = function(float:a, int:b) {
    return a + b
}

// 现在就不会报错了。。。
add(1.1, 1)

// 在 js 中没这个问题
// 我们称之为 duck type




继承
继承是说 子类拥有父类的某些东西

定义一个类 人

再定义 男人 女人
然后设置 男人 女人的 prototype = 人


*/



/*
其他数据结构

hash table  哈希表（散列表）
set         集合
tree        树
graph       图


哈希表就是用 字符串 当下标，也就是 js 中的对象的实现方式
也就是其他语言中的 字典

原理是用字符串 算出一个数字 然后用这个数字当下标存东西
比如 gua 这个字符串 我们用每个字符乘以一个数字最后求余得到下标
从字符串到数字的操作叫做 hash
// hash('gua') = 1
// hash('hs') = 3
【坑1， 坑2， 坑3， 坑4， 坑5， 坑6】
  gua       hs                wh
  xiao      lj
            bl



树一般是用来实现二叉搜索树的，应用范围不多
     6
    / \
   4   8
    \ / \
    57  9

*/
