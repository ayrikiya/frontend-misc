var $allButtons = $('button');

console.log($allButtons[0])

function activeButton($button) {
    $button.addClass('silk')
    .siblings('.silk').removeClass('silk');
}

// 点击触发轮播
for(let i = 0; i<$allButtons.length; i++) {
    $($allButtons[i]).on('click', function(e){
       var index = $(e.currentTarget).index(); //获取到事件节点在其父节点中到排行
       
       var pxvalue = index * -500;
       $('.img-wrapper').css({
           transform: 'translate('+ pxvalue +'px)'
       });
       n = index;

       activeButton($allButtons.eq(n));
    })
}

// 自动播放
var n = 0;

function setTimer() {
    return setInterval(() => {
        $allButtons.eq(n%4).trigger('click') //jquery封装元素后提供的eq函数 自动找到对应的元素并封装成jquery对象
        .addClass('silk')
        .siblings('.silk').removeClass('silk');
        // jq封装的trigger函数 用js帮你触发事件
        n += 1;
    }, 2000)
}

var intervalID = setTimer(); //setInterval启动

// 鼠标移入窗口 停止自动轮播
$('.img-window').on('mouseover', function(){
    window.clearInterval(intervalID);
})

// 鼠标移出窗口 继续自动轮播
$('.img-window').on('mouseout', function(){
    intervalID = setTimer();
})