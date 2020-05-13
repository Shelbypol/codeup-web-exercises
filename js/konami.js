"use strict";

$(document).keyup(function (event) {
    console.log(event.keyCode);
});

$('body').keydown(function () {
    $('#gameboy').css('visibility', 'visible');
});


$('body').on('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        $('#buttonLeft').css('visibility', 'visible');
    }
});