// 2016/11/29
// 作业 3 答案
//
// 注意, 自行去定义 log 函数(抄)


// 资料 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}


// 用于测试的套路, 照抄即可
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}


// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var product = function(array) {
    // 先设置一个变量用来存 乘积
    var s = 1
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累乘到变量 s
        s = s * n
        // 缩写是如下形式
        // s *= n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的乘了
  	return s
}


// 作业 2
// 返回一个数的绝对值
// 函数定义是
var abs = function(n) {
    if (n < 0) {
        return -n
    } else {
        return n
    }
}


// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function(array) {
    var n = array.length
    return sum(array) / n
}


// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var m = array[0]
    for(var i = 0; i > array.length; i++) {
        // console.log('for i, ', i)
        var n = array[i]
        // 如果 n 更小, 设置 m 为 n
        // 循环结束后 m 就是最小值
        if (m > n) {
            m = n
        }
    }
    return m
}

var ensureEqual = function(a, b, message) {
    if (a != b) {
        console.log(message, a, b)
    }
}

var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
    ensure(min([5, 2, 3]) == 2, '523 is not 2')
    ensureEqual(min([5, 2, 4]), 2, '524 != 2')
}

// console.log('test min')
// testMin()
// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum1 = function(n) {
    // 观察规律发现是奇数想加偶数相减
    var s = 0
    // 注意 i 是 1 到 n
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            s -= i
        } else {
            s += i
        }
    }
    return s
}


// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum2 = function(n) {
    // 观察规律, 可以 让初始值为 1
    // 从 2 开始循环
    // 1 + 2 - 3 + 4 - ... n
    var s = 1
    // 注意 i 是 2 到 n
    for (var i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            s += i
        } else {
            s -= i
        }
    }
    return s
}


// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var fac = function(n) {
    var s = 1
    for (var i = 1; i <= n; i++) {
        s *= i
    }
    return s
}



/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-') {
        return a - b
    }
    if(op == '*') {
        return a * b
    }
    if(op == '/') {
        return a / b
    }
}


/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 array
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 4, 用第一个数字减去所有的数字
*/
var applyList = function(op, oprands) {
    var result = oprands[0]
    for (var i = 1; i < oprands.length; i++) {
        var n = oprands[i]
        // 累加到 result
        result = apply(op, result, n)
    }
    return result
}


/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function(expression) {
    var op = expression[0]
    var a = expression[1]
    var b = expression[2]
    if (op == '<') {
        return a < b
    }
    if (op == '>') {
        return a > b
    }
    if (op == '==') {
        return a == b
    }
}


/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function(expression) {
    var op = expression[0]
    if (op == '+' || op == '-' || op == '*' || op == '/' ) {
        var oprands = expression.slice(1)
        return applyList(op, oprands)
    } else if(op == '<' || op == '>' || op == '==') {
        return applyCompare(expression)
    }
}


console.log('fe3 答案 结束')

// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念
