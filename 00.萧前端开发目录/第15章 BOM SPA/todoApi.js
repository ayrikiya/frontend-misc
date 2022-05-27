// TODO API
// 创建 todo object
var todoNew = function(task) {
    var t = {
        task: task,
        done: false,
    }
    return t
}
// 保存一个 todoList
var saveTodos = function(todoList) {
    localStorage.todos = JSON.stringify(todoList)
}
// 保存 todo
var saveTodo = function(todo) {
    var todoList = loadTodos()
    todoList.push(todo)
    saveTodos(todoList)
}
// 返回存储的所有 todo
var loadTodos = function() {
    var todoStr = localStorage.todos
    // 第一次读取的时候，结果是 undefined
    // 所以需要设置为空数组 '[]'
    // 否则 JSON.parse 就报错了
    if (todoStr == undefined) {
        todoStr = '[]'
    }
    var todoList = JSON.parse(todoStr)
    return todoList
}
