var $signboard = $('.board');

function toggle(){
  if($signboard.hasClass('active')){
    $signboard.removeClass('active');
  }else {
    $signboard.addClass('active');
  }
}

setInterval(toggle, 300)
