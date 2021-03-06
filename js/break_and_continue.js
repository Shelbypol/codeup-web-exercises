'use strict';


//=================== Number 2 Functions for Loop ====================
function isOdd(num) {
    return num % 2 !== 0;
}
// // console.log(isOdd(4), false); // false
// // console.log(isOdd(67), true); //true
//
function randomNum(num) {
    return num < 50 && num > 0;
}
// // console.log(randomNum(43), true); // (random)
// // console.log(randomNum(64), false); // (random)
//
function isOddBetween(num) {
    return  isOdd(num) === true && randomNum(num) === true;
}
// // console.log(isOddBetween(43), true); // true (odd tween)
// // console.log(isOddBetween(64), false); // false (odd twee)

//=================== Number 2 Loop ====================

// while (true) {
//    var  userInput = parseFloat(prompt('odd and under 50, above 0 #'));
//     if (isOddBetween(userInput)) {
//         console.log('Your number to skip is: ' + userInput);
//         break;
//     }
// }
//
// for (var i = 1; i < 50; i += 2) {
//     if(userInput === i) {
//         console.log('Yikes! Skipping number: ' + userInput);
//         continue;
//     }
//     console.log('Here is an odd number :' + i);
// }

