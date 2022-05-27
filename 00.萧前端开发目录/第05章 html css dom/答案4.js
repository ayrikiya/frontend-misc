// 2016/12/01
//
// ============
// 答案 4
//
// string 题目用到的知识还是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
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
        log('*** 测试失败:', message)
    }
}


// 作业 1
// 10 分钟做不出就看提示
//
var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    var index = -1
    for (var i = 0; i < s1.length; i++) {
        if(s1[i] == s2) {
            index = i
            break
        }
    }
    return index
}

// 测试函数, 自行实现
var test_find = function() {
}


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}


/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数
*/

var uppercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(lower, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += upper[index]
    }
    return result
}


/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串
*/
var lowercase1 = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 看看是否找到了
        if (index > -1) {
            result += lower[index]
        } else {
            // 没找到说明这个字符是小写字符, 直接添加
            result += s[i]
        }
    }
    return result
}


/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
*/
var uppercase1 = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(lower, s[i])
        // 看看是否找到了
        if (index > -1) {
            result += upper[index]
        } else {
            // 没找到说明这个字符是大写字符, 直接添加
            result += s[i]
        }
    }
    return result
}


/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位
*/
var shiftedChar = function(char, n) {
    /*
    返回字符 char 便宜 n 位后的字符
    */
    // 创建字母表
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // 先看看是不是大写字符
    // 这里我们只考虑是字符的情况
    var index = find(upper, char)
    if (index > -1) {
        // 这是 大写字符
        // 算出偏移后的下标
        // + 26 是为防止左移的时候下标小于 0
        var newIndex = (index + n + 26) % 26
        log('upper char', index, char)
        return upper[newIndex]
    } else {
        index = find(lower, char)
        if (index > -1) {
            // 这是小写字母
            var newIndex = (index + n + 26) % 26
            log('lower char', index, char)
            return lower[newIndex]
        } else {
            // 不是字母, 直接返回
            return char
        }
    }
}

var encode1 = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var c1 = s[i]
        var c2 = shiftedChar(c1, 1)
        log('encode', c1, c2)
        result += c2
    }
    return result
}


/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
var decode1 = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var c1 = s[i]
        var c2 = shiftedChar(c1, -1)
        result += c2
    }
    return result
}


/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
*/
var encode2 = function(s, shift) {
    // 同上
}


/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
var decode2 = function(s, shift) {
    // 同上
}


/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var encode3 = function(s, shift) {
    // 同上
}


/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var decode3 = function(s, shift) {
    // 同上
}


/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文
*/
var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

var decode4 = function(s) {
    // 不知道 shift 是多少, 所以 1 - 25 都试试
    for (var i = 1; i < 26; i++) {
        var source = decode3(s, i)
        log(source)
    }
}



// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况


2, uppercase
参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑


3, lowercase1
因为可能字符串中带小写字符, 那么就要判断一下才能处理


4, uppercase1
同作业 3 一样


11, decode4
因为不知道加密的位移, 所以考虑把所有加密的可能都打印出来人肉挑选
*/
