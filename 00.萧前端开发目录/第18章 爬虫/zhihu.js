/*
2016/12/31

fe18

本节课主要介绍 6 个点
- 爬虫的原理(等上课讲解)
- 普通的爬虫(以豆瓣电影为例)
- 需要登录的爬虫(以知乎为例)
- 爬虫的奥义(等上课讲解)
- 动态内容的爬取(以知乎的动态内容为例)
- 自定义模块的方法和使用方式

*/

// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没办法使用一些 let const 这样的特性
"use strict"


const request = require('request')
const cheerio = require('cheerio')

/*
本文件需要安装两个基本的库
request 用于下载网页
cheerio 用于解析网页数据

安装命令如下
npm install request cheerio

本压缩包因为已经自带了这两个库, 所以你不用手动安装了
直接运行即可

html js json 格式化工具
http://jsbeautifier.org/

课间问题 2
- 下载图片
- 爬虫也能找到工作吗？ 能的
- 是不是我们前端还会加一件数据库的课了。毕竟爬多了，不好存啊

*/

// 定义一个类来保存回答的信息
// 这里只定义了 3 个要保存的数据
// 分别是  作者 内容 链接
function Answer() {
    this.author = ''
    this.content = ''
    this.link = ''
    this.numberOfComments = 0
}


const log = function() {
    console.log.apply(console, arguments)
}


const answerFromDiv = function(div) {
    // 这个函数来从一个回答 div 里面读取回答信息
    const a = new Answer()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    // 使用这个 options 才能使用 html() 函数来获取带回车的文本信息
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(div, options)
    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    a.author = e('.author-link-line > .author-link').text()
    // 如果用 text() 则会获取不到回车
    // 这里要讲一讲爬虫的奥义
    a.content = e('.zm-editable-content').html()
    //
    a.link = 'https://zhihu.com' + e('.answer-date-link').attr('href')
    a.numberOfComments = e('.toggle-comment').text()
    // log('***  ', a.content)
    return a
}


const answersFromBody = function(body) {
    // cheerio.load 用字符串作为参数返回一个可以查询的特殊对象
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(body, options)
    // 查询对象的查询语法和 DOM API 中的 querySelector 一样
    const divs = e('.zm-item-answer')

    const answers = []
    for(let i = 0; i < divs.length; i++) {
        let element = divs[i]
        // 获取 div 的元素并且用 movieFromDiv 解析
        // 然后加入 movies 数组中
        const div = e(element).html()
        const m = answerFromDiv(div)
        answers.push(m)
    }
    return answers
}


const writeToFile = function(path, data) {
    const fs = require('fs')
    fs.writeFile(path, data, function(error){
        if (error != null) {
            log('--- 写入成功', path)
        } else {
            log('*** 写入失败', path)
        }
    })
}


const cachedUrl = function(options, callback) {
    const fs = require('fs')
    // 先生成对应的文件
    const path = options.url.split('/').join('-').split(':').join('-')
    // 先尝试去硬盘中读取这个 url 对应的文件
    fs.readFile(path, function(err, data){
        if (err != null) {
            // 读取这个文件失败
            // 读不到的话说明是第一次请求，那么就使用 request
            request(options, function(error, response, body) {
                // 下载好了之后，保存到本地文件
                // TODO, 应该下载成功之后再保存
                writeToFile(path, body)
                callback(error, response, body)
            })
        } else {
            log('读取到缓存的页面', path)
            // 读取到，说明已经下载过了，我们讲直接读取硬盘上的文件
            const response = {
                statusCode: 200,
            }
            callback(null, response, data)
        }
    })
}


const __main = function() {
    // 这是主函数
    // 知乎答案
    const url = 'https://www.zhihu.com/question/31515263'
    // request 从一个 url 下载数据并调用回调函数
    // 根据 伪装登录爬虫设置图例 替换 cookie 和 useragent 中的内容
    // 这里 useragent 我已经替换好了, 替换上你自己的 cookie 就好了
    const cookie = 'd_c0="AHAAH60MvwqPTjmwvdfucHkj7wveGq79HRM=|1477399807"; _zap=1a080e65-16ac-43a9-801a-44b00d7fdaed; _ga=GA1.2.660325042.1478000638; l_cap_id="MzlmNzBjZDU3MTMzNGU5OGI3ZDFmNmEzNDI0NzFmY2Y=|1480772832|6dc134dbd59983b6a26660f65b653df563f919fb"; cap_id="ZmZiMzc2MjI4Njg5NGJiZWI2ZDk4YzA5OTZkZTg1MDY=|1480772832|60cbf6cbed5bcb72bd31acd601ba6b9cc00d2dcf"; r_cap_id="YWRkOTEyYjZlZGE0NGM2ZTllNjc4MTZlYTIzYTQ2MjY=|1480772833|e0ecc69252705fc92326f5d3a40c4a4bd43e8326"; login="MGYzZjhjOGM1NmI4NGU0MGFlYTAzOGI1MTQyY2Y1YzY=|1480772846|dd72727f01b84566c4a0a82a6dcbaaac319cc6af"; q_c1=89d3fdd12a03449dbcd7511a57e47b11|1483011670000|1477399807000; _xsrf=3aab1ba02fd3d20b00c6feb9f3e1a5c6; __utma=51854390.660325042.1478000638.1483187102.1483187102.1; __utmb=51854390.0.10.1483187102; __utmc=51854390; __utmz=51854390.1483187102.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.100-1|2=registration_date=20130204=1^3=entry_date=20130204=1; z_c0=Mi4wQUFEQTJVTWFBQUFBY0FBZnJReV9DaGNBQUFCaEFsVk43bGxxV0FCUm1PQXItR01YRDF1NkprTFpfUGNCOWtQWkNn|1483187116|9ebe33e6bbe68e9ed0c4b0e361ab3f9344016384'
    const useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
    const headers = {
        'Cookie': cookie,
        'User-Agent': useragent,
    }

    const options = {
        url: url,
        headers: headers,
    }
    cachedUrl(options, function(error, response, body){
        // 回调函数的三个参数分别是  错误, 响应, 响应数据
        // 检查请求是否成功, statusCode 200 是成功的代码
        if (error === null && response.statusCode == 200) {
            const answers = answersFromBody(body)

            // 引入自己写的模块文件
            // ./ 表示当前目录
            const utils = require('./utils')
            const path = 'zhihu.answers.txt'
            utils.saveJSON(path, answers)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
    // request(options, function(error, response, body) {
    //     // 回调函数的三个参数分别是  错误, 响应, 响应数据
    //     // 检查请求是否成功, statusCode 200 是成功的代码
    //     if (error === null && response.statusCode == 200) {
    //         const answers = answersFromBody(body)
    //
    //         // 引入自己写的模块文件
    //         // ./ 表示当前目录
    //         const utils = require('./utils')
    //         const path = 'zhihu.answers.txt'
    //         utils.saveJSON(path, answers)
    //     } else {
    //         log('*** ERROR 请求失败 ', error)
    //     }
    // })
}


// 程序开始的主函数
__main()
