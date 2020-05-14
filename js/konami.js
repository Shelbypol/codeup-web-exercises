"use strict";

// $(document).keyup(function (event) {
//     console.log(event.keyCode);
// });

$('h1').click(function () {
    $('#gameboy').css('visibility', 'visible');
    $(this).css('visibility', 'hidden');
});

function blink_text() {
    $('h1').fadeOut(1000);
    $('h1').fadeIn(1000);
}
setInterval(blink_text, 1000);

//Secret Code
var bucket = [];
console.log(bucket);

var contraKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowB', 'ArrowA', 'Enter'];

function contraLives(arr1, arr2) {
    if (arr1.length === arr2.length) {
        //     for (var i = 0; i < arr1.length; i++) {
        if (arr1[0] === arr2[0] &&
            arr1[1] === arr2[1] &&
            arr1[2] === arr2[2] &&
            arr1[3] === arr2[3] &&
            arr1[4] === arr2[4] &&
            arr1[5] === arr2[5] &&
            arr1[6] === arr2[6] &&
            arr1[7] === arr2[7] &&
            arr1[8] === arr2[8] &&
            arr2[9] === arr2[9] &&
            arr1[10] === arr2[10]) {
            $('#contra').css('visibility', 'visible');
            $('body').css('background-image', 'url("https://media.giphy.com/media/5jT0jaNDsM6Ik7X9yq/giphy.gif")')

        } else {
            return bucket = [];
        }
    }
}

//Arrow Left
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        $('#buttonLeft').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowLeft');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonLeft').css('visibility', 'hidden');
        }, 200);
    }
});
//Arrow Right
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        $('#buttonRight').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowRight');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonRight').css('visibility', 'hidden');
        }, 200);
    }
});
//Arrow Up
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        $('#buttonUp').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowUp');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonUp').css('visibility', 'hidden');
        }, 200);
    }
});
//Arrow Down
$('body').on('keydown', function (event) {
    if (event.key === 'ArrowDown') {
        $('#buttonDown').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowDown');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonDown').css('visibility', 'hidden');
        }, 200);
    }
});
//Button A
$('body').on('keydown', function (event) {
    if (event.key === 'a') {
        $('#buttonA').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowA');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonA').css('visibility', 'hidden');
        }, 200);
    }
});
//Button B
$('body').on('keydown', function (event) {
    if (event.key === 'b') {
        $('#buttonB').css('visibility', 'visible');
        //push into empty bucket
        bucket.push('ArrowB');
        //compare arrays
        contraLives(contraKonami, bucket);
        setInterval(function () {
            $('#buttonB').css('visibility', 'hidden');
        }, 200);
    }
});
//Enter
$('body').on('keydown', function (event) {
    if (event.key === 'Enter') {
        bucket.push('Enter');
        //compare arrays
        contraLives(contraKonami, bucket);
    }
});

// //Secret Code
// var bucket = [];
// console.log(bucket);
//
// var contraKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter' ];
//
// function contraLives(arr1, arr2){
//     for(var i = 0; i > arr1.length; i++){
//         if(arr1[i] === arr2[i]){
//             $('#contra').css('visibility', 'visible');
//         }
//     }
// }
// // contraLives(contraKonami, bucket);