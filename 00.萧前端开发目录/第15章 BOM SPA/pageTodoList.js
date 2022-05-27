var todoTemplate = function(todo) {
    var done = todo.done
    var task = todo.task
    var t = `
        <div class="todo-cell">
            ${task}
        </div>
    `
    return t
}

var insertTodoList = function(todoList) {
    var todoListDiv = e('.todo-list')
    // 清空现有的所有 todo
    todoListDiv.innerHTML = ''
    for (var i = 0; i < todoList.length; i++) {
        var todo = todoList[i]
        var t = todoTemplate(todo)
        appendHtml(todoListDiv, t)
    }
}

// 加载所有 todo 并且显示在界面上
var showTodoList = function() {
    var todoList = loadTodos()
    insertTodoList(todoList)
}
