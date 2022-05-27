// 轮播图
// 每个网站包括苹果都有的轮播图组件(什么是组件)
/*
1，写一个 div 里面有 3 个 img 标签
2，只显示当前活动的 img 标签
3，加 1 个按钮，点击的时候切换图片
*/

var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event){
        console.log('click next')
        // 找到 slide div
        var slide = event.target.parentElement
        // 得到图片总数和当前图片下标
        var numberOfImgs = parseInt(slide.dataset.imgs)
        var activeIndex = parseInt(slide.dataset.active)
        // log('click slide', )
        // 求出下一张图片的 id
        var nextIndex = (activeIndex + 1) % numberOfImgs
        // 设置父节点的 data-active
        slide.dataset.active = nextIndex
        var nextSelector = '#id-guaimage-' + String(nextIndex)
        // 删除当前图片的 class 给下一张图片加上 class
        var className = 'gua-active'
        removeClassAll(className)
        var img = e(nextSelector)
        img.classList.add(className)
    })
}

bindEventSlide()
