const $ = require('jquery');

const $productItem = $('.product-item');
const $additionalContent = $('.product-additional-content');
function placeBox(el) {
  el.each(function (i, el) {
    const elem   = $(this).find('.product-additional-content');
    const $width = $(this).width();
    const $pos   = $(this).position();

    elem.width($width).css({ left: $pos.left });
  });
}

//on page init
placeBox($productItem);

//on page resize
$(window).resize( () => placeBox($productItem) );

//on product-list scroll
$('.product-list').scroll( () => {
  $additionalContent.removeClass('animate-card');
  placeBox($productItem);
});

$('.product-item').mouseover(function () {
  event.stopPropagation();
  $(this).find('.product-additional-content').addClass('animate-card');
})

$('.product-item').mouseout( () => $additionalContent.removeClass('animate-card') );


$('.container, #why-us-part').click( 
  () => $additionalContent.removeClass('animate-card') 
);

// review
const $reviewText = $('.review > .content .desc');

$reviewText.each(function(){
  $(this).text().length > 110
         ? $(this).text( $(this).text().substring(0, 110).concat('...') ) 
         : false;
})
