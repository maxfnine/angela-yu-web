// $('h1').on('click',function(){
//     $('h1').css('color','purple');
// });

// $('h1').on('mouseout',function(){
//     $('h1').css('color','yellow');
// });

$('button').on('click',function(){
$('h1').slideUp().slideDown().animate({opacity:0.5});
});