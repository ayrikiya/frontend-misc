/*
1, 写出 html
2, 给按钮绑定事件
3, 在点击按钮的时候切换内容的显示
*/
// ctrl + \ 取消 左边的目录图

// var bindEventToggle = function() {
//     var b = e('.gua-menu-toggle')
//
//     // b.addEventListener
//     bindEvent(b, 'click', function(event) {
//         console.log('click button')
//         // 找到 gua-menu-content
//         var c = e('.gua-menu-content')
//         // 开关 gua-hide class
//         toggleClass(c, 'gua-hide')
//     })
// }

var bindEventToggles = function() {
    var selector = '.gua-menu-toggle'
    bindAll(selector, 'click', function(event){
        console.log('click button')
        // 找到自己这个菜单的 gua-menu-content
        var p = event.target.parentElement
        var c = find(p, '.gua-menu-content')
        // 开关 gua-hide class
        toggleClass(c, 'gua-hide')
    })
}

bindEventToggles()
