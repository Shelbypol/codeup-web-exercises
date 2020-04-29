'use strict';

//========= Number 2 ==============

//With console.log

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' x ' + i + ' = ' + num * i)
    }
}
// showMultiplicationTable(7);

//How to do it without console log
//
// function showMultiplicationTable(num) {
//     var output = '';
//     for (var i = 1; i <= 10; i++) {
//         output += num + ' x ' + i + ' = ' + num * i;
//         output += '\n';
//     }
//     return output;
// }
// console.log(showMultiplicationTable(7));

//========= Number 3 ==============
function isEven(num){
    return parseFloat(num) % 2 === 0;
}

function randomTwoHundred() {
    var twoHundred = Math.floor(Math.random()* (200 - 20))+ 20;
    if(isEven(twoHundred) === true){
        console.log(twoHundred + ' is even');
    } else {
        console.log(twoHundred + ' is odd');
    }
}
 //Don't need the function just have it there to easily comment out and not crowd the console.
function isEvenOdd() {
    for(var i = 0; i <10; i++) {
        randomTwoHundred();
    }
}
// isEvenOdd();

//========= Number 4 ==============
function numTriangle(){
    for(var i = 1; i < 10; i++){
        console.log(i.toString().repeat(i));
    }
}
// numTriangle();

//========= Number 5 ==============
function downFive() {
    for(var i = 100; i > 0; i -= 5){
        console.log(i);
    }
}
// downFive();

//output without console log
// function displayDecrease( max, min , jump){
//     var output = '';
//     for (var i = max; i >= min; i -= jump){
//         output +=i +'\n';
//     }
//     return output;
// }
// console.log(displayDecrease(100, 5, 5))