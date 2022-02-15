$(function(){
    // banner
    $('.banner_clk').slick({
        dots: false,
        infinite: true,
        prevArrow:'.past',
        nextArrow:'.last',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        Infinity:true
      });
    //   banner end
    // service start
   
$('.main_slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:".pre",
  nextArrow:".nex",
  centerMode: true,
  centerMode: true,
  centerPadding: '0',
  vertical: true
});
// unknown start
  
$('.un_slk').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
    centerPadding:"0px",
    focusOnSelect: true,
    vertical:true,
    prevArrow:".prev",
    nextArrow:".next",
    infinite:true,
});
// unknown end

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


});