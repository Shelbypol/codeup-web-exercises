'use strict';

// $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
// });

//using an iife
// (function ($) {
//     $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
//     });
//
// })(jQuery);

// var heading = $('#heading').html();
// alert(heading);
//
// var musicTitle = $('#listOne').html();
// alert(musicTitle);

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', 'yellow');

$('h1').click(function () {
    $(this).css('background', 'teal');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(function () {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', 'black');
});
