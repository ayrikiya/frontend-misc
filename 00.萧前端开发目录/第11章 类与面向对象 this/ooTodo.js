var Api = function(qq) {
    this.baseUrl = 'http://vip.cocode.cc/sandbox/todo/' + qq
}

Api.prototype.ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    var url = this.baseUrl + path
    r.open(method, url, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            // console.log('ready state == 4')
            var data = JSON.parse(r.response)
            // console.log('ready state. data', data)
            reseponseCallback(data)
        }
        // console.log('on state change', r)
    }
    // 发送请求
    data = JSON.stringify(data)
    r.send(data)
}

Api.prototype.addTodo = function(task, response) {
    var path = '/add'
    var data = {
        'task': task,
    }
    this.ajax('POST', path, data, response)
}

Api.prototype.updateTodo = function(todoId, task, response) {
    var path = '/update/' + todoId
    var data = {
        'task': task,
    }
    this.ajax('POST', path, data, response)
}

Api.prototype.deleteTodo = function(todoId, response) {
    var path = '/delete/' + todoId
    this.ajax('GET', path, '', response)
}

Api.prototype.loadTodos = function(response) {
    var path = '/all'
    this.ajax('GET', path, '', response)
}

var api = new Api(3400711034)

// api.loadTodos(function(r){
//     console.log('load todos', r)
// })

// api.addTodo('api调用todo', function(r) {
//     console.log('add todo 成功', r)
// })
