// 2016/12/08
//
// ============
// 作业 7
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}


// 作业 2
// 实现函数
var split = function(s, delimiter=' ') {
    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑

     0123456789
    'a=bc=def'
    [0, 1, 4, s.length]
    (0, 1)
    (1, 4)
    (4, s.length)
    */

    var l = []
    // space 是分隔符的长度, 因为分隔符不一定长度为 1
    var space = delimiter.length
    // start 用来存储每次的开始下标
    var start = 0
    for(var i = 0; i < s.length; i++) {
        // 检查分隔符
        if(s.slice(i, i+space) === delimiter) {
            // 如果检查到了, 就存储一个数据
            l.push(s.slice(start, i))
            // 设置新的开始下标
            start = i + space
        }
    }
    // 把最后一个元素添加进去
    l.push(s.slice(start))
    return l
}


// 作业 3
// 实现函数
var replaceAll = function(s, old, newString) {
    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */
    // 很简单, 对吧?
    var s1 = split(s, old)
    var s2 = join(newString, s1)
    return s2
}


// 作业 4
// 实现函数
var str1 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'

    1-n
    (n-1)-1
    */
    var s = ''
    // 左边, 注意下标
    for (var i = 0; i < n; i++) {
        s += String(i+1)
    }
    // log('str1 zobm', s)
    // 右边, 注意下标和 i--
    for (var i = n - 1; i > 0; i--) {
        s += String(i)
    }
    return s
}


// 作业 5
// 实现函数
var str2 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */
    // 用下标来取字符
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var s = ''
    // 左边
    for (var i = 0; i < n; i++) {
        s += upper[i]
    }
    // 右边, 注意下标
    for (var i = n - 2; i >= 0; i--) {
        s += upper[i]
    }
    return s
}


// 作业 6
// 实现加法口诀表
//
// 辅助函数
var addLine = function(number) {
    var s = ''
    for (var i = 0; i < number; i++) {
        var n = i + 1
        s += `${number} + ${n} = ${number+n}  `
    }
    return s
}

var addTable = function() {
    /*
    返回这样格式的加法口诀表(没写全, 但是要返回完整的)
    注意, 这只是我输入的内容
    实际上你普通 log 出来是不会有回车的
    [
        '1 + 1 = 2',
        '2 + 1 = 3  2 + 2 = 4',
        '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
    ]
    */
    var table = []
    for (var i = 1; i <= 9; i++) {
        var line = addLine(i)
        table.push(line)
    }
    return table
}

// 用之前的 join 就可以漂亮地输出了
// log(join('\n', addTable()))


// 作业 7
// 实现函数
var range1 = function(start, end) {
    /*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */
    var l = []
    for (var i = start; i < end; i++) {
        l.push(i)
    }
    return l
}


// 作业 8
// 实现函数
var range2 = function(start, end, step=1) {
    /*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
    */
    var l = []
    // i += step
    for (var i = start; i < end; i += step) {
        l.push(i)
    }
    return l
}


// 作业 9
// 实现函数
var stepCondition = function(current, end, step) {
    if (step > 0) {
        return current < end
        // 下面两种是经常能看到的反例
        // if(current < end) {
        //     return true
        // } else {
        //     return false
        // }
        // return current < end ? true : false
    } else {
        return current > end
    }
}

var range3 = function(start, end, step=1) {
    /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]
    */
    var l = []
    var i = start
    // 简单的办法是根据 step 写不同的条件
    // 我这里用了一个辅助函数
    while(stepCondition(i, end, step)) {
        l.push(i)
        i += step
    }
    return l
}


// 作业 10
// 实现函数
var random01 = function() {
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */
    // r 是一个 0 - 1 的小数
    var r = Math.random()
    // * 10, 现在是 0 - 10 的小数了
    r *= 10
    // 取整, 现在是 0 - 10 的整数了
    r = Math.floor(r)
    // 用余数来取随机 0 1
    return r % 2
}


// 作业 11
// 实现函数
var randomLine01 = function(n) {
    /*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
    */
    var l = []
    // 循环 n 次, 每次添加一个 random01
    for (var i = 0; i < n; i++) {
        var r = random01()
        l.push(r)
    }
    return l
}


// 作业 12
var randomSquare01 = function(n) {
    /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
    */
    var l = []
    // 循环 n 次, 每次添加一个 randomLine01
    for (var i = 0; i < n; i++) {
        var line = randomLine01(n)
        l.push(line)
    }
    return l
}


// 作业 13
var randomLine09 = function(n) {
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]

    上上期有初学编程的同学用了一个很优雅的办法, 我就想不到
    */
    // 额外的 2 种方法
    // 1，取下标法
    // var numbers = [0, 9, 7]
    // var index = randomLine01(n)
    // var n = numbers[index]
    // 2，直接 * 9
    // var n = random01() * 9

    var line = randomLine01(n)
    // 把 1 都换成 9
    for (var i = 0; i < line.length; i++) {
        if(line[i] === 1) {
            line[i] = 9
        }
    }
    return line
}


// 作业 14
var markedLine = function(array) {
    /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
    */
    var line = array.slice(0)
    for (var i = 0; i < line.length; i++) {
        var n = line[i]
        if (n === 9 && i > 0) {
            // 把左边的数字 +1
            if (line[i-1] !== 9) {
                line[i-1] += 1
            }
        }
        if (n === 9 && i < line.length - 1) {
            // 把右边边的数字 +1
            if (line[i+1] !== 9) {
                line[i+1] += 1
            }
        }
    }
    return line
}


// 作业 15
// 复制一个 square
var clonedSquare = function(array) {
    var s = []
    for (var i = 0; i < array.length; i++) {
        var line = []
        for (var j = 0; j < array[i].length; j++) {
            line.push(array[i][j])
        }
        s.push(line)
    }
    return s
}

// 辅助函数, 给数字 +1
// 这里会判断下标是否合法
var plus1 = function(array, x, y) {
    var n = array.length
    if (x >= 0 && x < n && y >= 0 && y < n) {
        if (array[x][y] !== 9) {
            array[x][y] += 1
        }
    }
}

// 辅助函数, 用来给 9 周边的 8 个格子 +1
var markAround = function(array, x, y) {
    /*
    ###
    #+#
    ###
    */
    if (array[x][y] === 9) {
        // 左边 3 个
        plus1(array, x - 1, y - 1)
        plus1(array, x - 1, y)
        plus1(array, x - 1, y + 1)
        // 上下 2 个
        plus1(array, x, y - 1)
        plus1(array, x, y + 1)
        // 右边 3 个
        plus1(array, x + 1, y - 1)
        plus1(array, x + 1, y)
        plus1(array, x + 1, y + 1)
    }
}

var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */
    var square = clonedSquare(array)
    for (var i = 0; i < square.length; i++) {
        var line = square[i]
        for (var j = 0; j < line.length; j++) {
            markAround(square, i, j)
        }
    }
    return square
}

// 变量取名
/*
如果函数要返回一个数据
    函数名字是 名词

如果函数只做事不返回
    函数名字是 动词

变量名、函数名取名方式
    驼峰法 markedSquare


*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine
*/
