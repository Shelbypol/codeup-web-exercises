"use strict";

$(document).keyup(function (event) {
    console.log(event.keyCode);
});

$('body').keypress(function () {
    $('#gameboy').css('visibility', 'visible');
});