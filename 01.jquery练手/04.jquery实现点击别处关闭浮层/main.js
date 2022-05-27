// buttonI.addEventListener('click', function () {
//     popover.style.display= 'block';
// });

// wrapper.addEventListener('click', function (e) {
//     e.stopPropagation();
// });

// document.addEventListener('click', function () {
//     popover.style.display= 'none';
// })

//jquery来写

$(buttonI).on('click', function(){
    $(popover).show();
    $(document).one('click', function(){
        $(popover).hide();
    });
    
});

$(wrapper).on('click', function(e){
    // e.preventDefault();  这条不能写 写了checkbox无法点击
    e.stopPropagation();
});
