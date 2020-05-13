"use strict";

$(document).keyup(function (event) {
    console.log(event.keyCode);
});

$('body').keydown(function () {
    $('#gameboy').css('visibility', 'visible');
});




setInterval(function () {
}, 1000 );

    //Arrow Left
    $('body').on('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            $('#buttonLeft').css('visibility', 'visible');
        }
    });
//Arrow Right
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        $('#buttonRight').css('visibility', 'visible');
    }
});
//Arrow Up
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        $('#buttonUp').css('visibility', 'visible');
    }
});
//Arrow Down
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowDown') {
        $('#buttonDown').css('visibility', 'visible');
    }
});
//Button A
$('body').on('keydown', function (event) {
    if (event.key === 'a') {
        $('#buttonA').css('visibility', 'visible');
    }
});
//Button B
$('body').on('keydown', function (event) {
    if (event.key === 'b') {
        $('#buttonB').css('visibility', 'visible');
    }
});