let n;
initalize();

setInterval(()=>{
  makeLeave(getImageNode(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImageNode(n+1))
  n += 1;
},3000);

// 下面可以不看
function getImageNode(n){
  return $(`.img-wrapper > img:nth-child(${getIndex(n)})`)
};

function getIndex(n){
    n = n%4;
    if(n === 0){
        n = 4;
    };
    return n;
};

function initalize(){
  n = 1;
  $(`.img-wrapper > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
};

function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
};

function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
};

function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
};
