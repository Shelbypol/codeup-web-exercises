"use strict";

// $(document).keyup(function (event) {
//     console.log(event.keyCode);
// });

// $('body').keydown(function () {
//     $('#gameboy').css('visibility', 'visible');
// });y

//Secret Code
var bucket = [];
console.log(bucket);

var contraKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter' ];

function contraLives(arr1, arr2){
    for(var i = 0; i >= arr1.length; i++){
        if(arr1[i] === arr2[i]){
           return $('#contra').css('visibility', 'visible');
        }
    }
}
// contraLives(contraKonami, bucket);


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