var $ = require("jquery");

const $productItem = $('.product-item')

function placeBox(el){
    el.each(function( i, el ) {
        const elem = $(this).find('.product-additional-content');
        const $width = $( this ).width();
        const $pos = $( this ).position();

        elem.width($width)
            .css({left: $pos.left });
    });
}

placeBox($productItem);

$( window ).resize(function() {
  placeBox($productItem);
});

$( ".product-list" ).scroll(function() {
  placeBox($productItem);
});



