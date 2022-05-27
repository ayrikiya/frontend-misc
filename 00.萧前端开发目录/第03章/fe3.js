// 2016/11/26
//
// 此为第 3 课的上课内容
//
// 今天上课的内容是
// 作业 2 讲解
// debug(调试/除错) 的标准应对流程
// array 和 string
//
// 预习内容是
//
// 内置数据结构 array(列表)
// 字符串和常用字符串操作
//
// 看不懂, 很正常
// 完全看不懂, 有小问题


var log = function() {
    console.log.apply(console, arguments)
}

// array 可以干嘛?
// array 可以存储很多元素, 每个元素的值、类型都不用相同
// 具体看下面的例子
//
// array(数组) 常用操作
// 创建数组
// 使用 [] 符号, 每个元素用逗号分隔
var a = [1, 3, 4, 5]
// 现在 a 是一个 array，拥有 4 个元素


// 可以用 .length 得到 array 的长度
log('求 array 长度', a.length)
// 使用 .length 可以求出列表的长度(列表中元素的个数)
// 值可以用变量接住
var length = a.length
log(length)


// 访问元素
// 对于数组中的每个元素, 可以通过下标（就是元素在数组中的序号，从 0 开始）访问
// 下标访问语法是 [] 中括号
log('用下标访问 array 中的元素')
log(a[0])
log(a[1])
log(a[2])
log(a[3])
// 因为一共只有 4 个元素, 所以访问不存在的下标会出错
log(a[4])


// 手动访问元素当然是低效的
// 可以用循环来访问元素, 这个过程叫 遍历
// 注意, 这里我们引入了一个新的语法, for 循环
// 具体上课会解释
log('循环访问 array 所有元素')
var length = a.length
for(var i = 0; i < length; i++) {
    log(a[i])
}
// 上面的循环等价于下面的 while
var i = 0
while(i < length) {
    log(a[i])

    i++
}


// 向已经存在的 array 中添加新元素
// 可以用列表的 push 函数往列表末尾插入一个元素
// 并且, 这个新元素可以是任意类型, 这里是一个字符串
a.push('新元素')
log(a)
// [1, 3, 4, 5, '新元素']
a.push(0)
log(a)
// [1, 3, 4, 5, '新元素', 0]
// 多添加几个元素
a.push(12)
a.push(23)
a.push(34)
log(a)


// 题目, 给定一个只包含数字的 array
// 题目，得到列表中最小的元素
// 题目，得到列表中所有数字的合
// 题目，得到列表中所有数字的平均数
// 提示, array.length 可以得到 array 长度（也就是元素个数），上文有写

var a = [3, 9, 2, 0, 8]
var min = a[0]
for (var i = 0; i < a.length; i++) {
    var n = a[i]
    if (n < min) {
        min = n
    }
}
log(min)



// 字符串
// ——字符串操作——
// 字符串可以判断相等、判断是否包含、相加、取子字符串
// 例子：
// 判断相等或者包含
log('good' == 'good')
log('good' == 'bad')
log('good' != 'bad')
log('impossible'.includes('possible'))

// 拼接得到一个新字符串
log('very' + 'good')
log('very ' + 'good')

// 得到一个你想要的字符串有多种方式
// 但是现在有现代的方式, ES6(上课会解释什么是 ES6) 的 模板字符串
// 注意, 书上如果和我不一样, 以我为准
// 用法如下
var name = 'gua'
var a = `${name}, 你好`
log(a)
// 简单说来, 就是 ${} 会被变量替换行成新字符串


// 字符串相当于一个 array，可以用数字下标访问
// 看例子，看结果
// s 的长度为 7，但是下标是从 0 开始的，所以最大下标是6
var s = 'iamgood'
log(s[0])
log(s[1])
log(s[2])
// ...
log(s[6])
//
// 当然也就可以和 array 一样用循环遍历了
// 自己试试


// 字符串可以切片, 当然, array 也可以这样切片
// 语法如下
// s.slice(开始下标, 结束下标)
s.slice(0, 3)  // 'iam'
s.slice(1, 3)  // 'am'

// 省略下标参数意思是取到底
s.slice(2)   // 'mgood'
