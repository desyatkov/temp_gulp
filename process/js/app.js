var $ = require("jquery");


$('li').hover( function(){
    const $width = $( this ).width();
    const $pos = $( this ).position();
    

    $( this ).find('.product-additional-content')
        .width($width)
        .css({left: $pos.left });
})

// $('#drag-list').scroll(function(){
//     $('.product-additional-content').hide()
// })