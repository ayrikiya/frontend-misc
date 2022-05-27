// 2016/11/25
// 作业 2
//
// 作业开始
// 注意, 作业中提到的国旗的颜色我们只画线框不填色

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    //
    var i = 0
    while(i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i = i + 1
    }
}


// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var center_rect = function(x, y, w, h) {
    var x1 = x - w / 2
    var y1 = y - h / 2
    rect(x1, y1, w, h)
}


// 3
// 实现一个正五角星(国旗大星星那种)函数
// x y 是五角星顶部横边的左边点坐标
// length 是一条线的长度
// 这是一个正五角星
// vgwujcxy(x, y, length)

// 4
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
var circle = function(x, y, r) {
    jump(x, y)
    setHeading(0)
    // 走到起点
    var bmuu = 10
    var angle = 360 / bmuu
    var angleHalf = angle / 2
    left(90)
    left(angleHalf)
    penup()
    forward(r)
    pendown()
    setHeading(0)
    // 算出边长
    var c = 2 * 3.14 * r
    var bmih = c / bmuu
    // 循环画圆
    var i = 0
    while (i < bmuu) {
        forward(bmih)
        right(angle)
        i = i + 1
    }
}

// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理
var japan = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 100
    //
    var centerX = x + w / 2
    var centerY = y + h / 2
    center_rect(centerX, centerY, w, h)
    setPenColor('#FF0000')
    circle(centerX, centerY, h * 0.3)
}

// setDelay(0)
// japan()

// 5
// 实现一个五角星函数
// x y 是五角星的中心点坐标
// r 是五角星的外接圆半径
// rorate 是正五角星顺时针偏移的角度
// wujcxy(x, y, r, rorate)
// 为了实现这个函数, 你需要使用三角函数计算顶点在圆上的坐标
// 如果你不懂这个数学计算过程, 可以在论坛提问
// 我帮你实现了正弦余弦函数如下
var sin = function(degree) {
    // 如上课所述, 数学库里面的 sin 函数接受弧度作为参数
    // 我们这个函数接受角度, 下面是弧度转角度的公式
    var radians = degree * Math.PI / 180
    return Math.sin(radians)
}

var cos = function(degree) {
    var radians = degree * Math.PI / 180
    return Math.cos(radians)
}


// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要 5 个五角星即可）
// 当然你也可以使用第 5 题 wujcxy 这个函数画出完美的国旗
// china()
var china = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 100
    //
    rect(x, y, w, h)
    // wujcxy()
    //
}

// 7
// 实现一个函数画法国国旗
// france()
var france = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 100
    //
    var x1 = x
    var x2 = x + w / 3
    var x3 = x2 + w / 3
    var w1 = w / 3
    setPenColor('#0000FF')
    rect(x1, y, w1, h)
    setPenColor('#FFFFFF')
    rect(x2, y, w1, h)
    setPenColor('#FF0000')
    rect(x3, y, w1, h)
}
// 8
// 画德国国旗
// germany()
var germany = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 100
    //
    var y1 = y
    var y2 = y + h / 3
    var y3 = y2 + h / 3
    var w1 = w
    var h1 = h / 3
    setPenColor('#000000')
    rect(x, y1, w1, h1)
    setPenColor('#FF0000')
    rect(x, y2, w1, h1)
    setPenColor('#FFFF00')
    rect(x, y3, w1, h1)
}

// 9
// 画 冈比亚国旗
// gambia()
var gambia = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 100
    //
    var y1 = y
    var y2 = y + h / 3
    var y3 = y2 + h / 3
    var w1 = w
    var h1 = h / 3
    setPenColor('#FF0000')
    rect(x, y1, w1, h1)
    setPenColor('#FFFFFF')
    rect(x, y2, w1, h1)
    setPenColor('#00FF00')
    rect(x, y3, w1, h1)
    //
    setPenColor('#0000FF')
    var cx = x + w / 2
    var cy = y + h / 2
    var centerH = h1 * 0.7
    center_rect(cx, cy, w, centerH)
}


// 10
// 画 瑞士国旗
// switzerland()
var switzerland = function() {
    var x = 0
    var y = 0
    var w = 150
    var h = 150
    //
    setPenColor('#FF0000')
    rect(x, y, w, h)
    // 画两个十字架 白色
    var cx = x + w / 2
    var cy = y + h / 2
    var w1 = w * 0.6
    var h1 = h * 0.2
    setPenColor('#000000')
    center_rect(cx, cy, w1, h1)
    center_rect(cx, cy, h1, w1)
}


// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
var northkorea = function() {
    var x = -150
    var y = -100
    var w = 150
    var h = 100
    //
    var cx = x + w / 2
    var cy = y + h / 2
    // 蓝色矩形
    setPenColor('#0000FF')
    rect(x, y, w, h)
    // 画白色
    setPenColor('#000000')
    center_rect(cx, cy, w, h * 0.6)
    // 画红色
    setPenColor('#FF0000')
    center_rect(cx, cy, w, h * 0.5)
    // 画圆形
    var x1 = x + w / 3
    var y1 = cy
    var r = h * 0.2
    setPenColor('#000000')
    circle(x1, y1, r)
    // 画五角星
    // setPenColor('#FF0000')
    // wujcxy(x1, y1, r)
}

// 如果你实在无聊, 还可以画美国国旗(这个很复杂, 不要求你现在画)
