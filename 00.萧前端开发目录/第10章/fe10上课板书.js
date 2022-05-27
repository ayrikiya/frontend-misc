// 2016/12/12
//
// ============
// 作业 9
//
//

/*
这次作业是一个大作业


访问 vip.cocode.cc/sandbox
把你的代码贴到终端中
实现一个用 ajax 和后端交互数据的 todo


注意, 本次的作业, 需要你动态构建界面


'''
todo 后端程序提供了 4 个 API, 说明如下


1, 获得所有的 todo, 返回的是一个 JSON 格式字符串(数组)

GET
http://vip.cocode.cc/sandbox/todo/<你的qq号>/all

以我为例, 我应该使用下面这个 url 来获取我的所有 todo
http://vip.cocode.cc/sandbox/todo/3400711034/all

ajax(method, url, null, '', function(r){
    var todos = JSON.parse(r.response)
    console.log(todos)
})

2, 发送 JSON 格式字符串来创建一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc/sandbox/todo/<你的qq号>/add

var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/add'
var data = {
    'task': 'haha',
}
data = JSON.stringify(data)
ajax('POST', url, null, data, function(r){
    var t = JSON.parse(r.response)
    console.log(t)
})


3, 发送 JSON 格式字符串来更新一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc/sandbox
/todo/<你的qq号>/update/<todo_id>

var todoId = '965'
var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/update/965'
var data = {
    'task': 'great',
}
data = JSON.stringify(data)
ajax('POST', url, null, data, function(r){
    var t = JSON.parse(r.response)
    console.log(t)
})



4, 删除一个 todo
GET
http://vip.cocode.cc/sandbox/todo/<你的qq号>/delete/<todo_id>

var todoId = '965'
var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/delete/965'
data = JSON.stringify(data)
ajax('GET', url, null, '', function(r){
    var t = JSON.parse(r.response)
    console.log(t)
})

'''

*/

/*
如何完成复杂程序
1，不要慌
2，拆分需求，如下所示（以 5-10 分钟能完成为拆分粒度）
3，有问题的需求先跳过，最后不做也是行的
4，边实现需求边测试，不要到最后一锅粥
*/

/*
1，往页面中添加输入框和提交按钮
    绑定提交按钮事件
    点击提交按钮会发送创建 todo 的 ajax
    ajax 成功后会在页面中添加被创建的 todo
2，载入所有 todos
3，显示所有 todos
4，每个 todo 要显示删除按钮
5，删除按钮可以删掉这个 todo
    绑定删除按钮的事件
    写出删除函数，需要 todo_id
    在事件中调用删除函数，需要得到 todo_id 并传给删除函数
6，每个 todo 要显示更新按钮
8，添加 css

7，点击更新按钮后，这个需求有问题
*/

var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

var ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            reseponseCallback(r)
        }
    }
    // 发送请求
    r.send(data)
}

// 1，往页面中添加输入框和提交按钮
var init = function() {
    var t = `
    <input id=id-input-task>
    <button id=id-button-add>add todo</button>
    `
    appendHtml(e('#id-div-todo-container'), t)
}

var baseUrl = 'http://vip.cocode.cc/sandbox/todo/3400711034'

// 2，载入所有 todos
var loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajax(method, url, '', function(r){
        var todos = JSON.parse(r.response)
        log(todos)
        insertTodos(todos)
    })
}

var todoTemplate = function(todo) {
    /*
    {
      "created_time": 1478096811,
      "id": 698,
      "qq": "3400711034",
      "task": "study"
    }
    */
    var task = todo.task
    var id = todo.id
    var t = `
        <div id=${id}>
        <button class=button-delete>删除</button>
        <button class=button-update>更新</button>
            <span id=task-${id}>
            ${task}
            </span>
        </div>
    `
    return t
}

// 3，显示所有 todos
var insertTodos = function(todos) {
    var container = e('#id-div-todo-container')
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        var t = todoTemplate(todo)
        appendHtml(container, t)
    }
}

var deleteTodo = function(todoId) {
    // var todoId = '965'
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/delete/' + todoId
    ajax('GET', url, '', function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

var updateTodo = function(todoId, task) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/update/' + todoId
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, data, function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

// 5，删除按钮可以删掉这个 todo
//     绑定删除按钮的事件
//     写出删除函数，需要 todo_id
//     在事件中调用删除函数，需要得到 todo_id 并传给删除函数
//     删除 todo 这个 div，暂时不关心服务器那边是否删除成功
var bindEventDelete = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        log(target.classList)
        if(target.classList.contains('button-delete')) {
            // 这是删除按钮
            log('点到了删除')
            // 获取 todo id
            var todoId = target.parentElement.id
            deleteTodo(todoId)
            // 删除 todo 的 div
            target.parentElement.remove()
        }
    })
}

// 8，添加 css
var addCss = function() {
    var style = `
    <style>
        div {
            outline: red 1px dashed;
        }
    </style>
    `
    var head = e('head')
    appendHtml(head, style)
}

// 7，点击更新按钮后
//      往 div 中添加两个元素 input 和 提交按钮
//      给提交按钮绑定事件
//      点击提交按钮的时候 发送 ajax 请求到服务器
var bindEventUpdate = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        // log(target.classList)
        if(target.classList.contains('button-update')) {
            // 这是更新按钮
            log('点到了更新')
            // 获取 todo id
            var todoId = target.parentElement.id
            // 往 div 中添加两个元素 input 和 提交按钮
            var t = `
                <input id=update-${todoId}>
                <button class=button-submit>提交</button>
            `
            appendHtml(target.parentElement, t)
        }
    })
}

// 点击提交按钮的时候 发送 ajax 请求到服务器
var bindEventSubmit = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        // log(target.classList)
        if(target.classList.contains('button-submit')) {
            // 这是提交按钮
            log('submit button')
            // 获取 todo id
            var todoId = target.parentElement.id
            // 点击提交按钮的时候 发送 ajax 请求到服务器
            // 1，得到 input 的值
            // input 的 id 是 update-<id>
            var inputId = 'update-' + todoId
            var selector = '#' + inputId
            var task = e(selector).value
            // 发送更新请求
            updateTodo(todoId, task)
            // 更新页面上的 todo task
            var taskId = 'task-' + todoId
            selector = '#' + taskId
            e(selector).innerHTML = task
            log('submit debug', selector, task)
        }
    })
}

var bindEvents = function() {
    bindEventDelete()
    bindEventUpdate()
    // 给提交按钮绑定事件
    bindEventSubmit()
}

var __main = function() {
    init()
    loadTodos()
    addCss()
    bindEvents()
}

__main()
