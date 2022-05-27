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

var addTodo = function(task) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/todo'
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, data, function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
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
