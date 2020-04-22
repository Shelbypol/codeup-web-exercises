"use strict"

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

        // function analyzeColor(myColor){
        //     if(myColor === 'blue'){
        //         return 'Blue is the color of the sky';
        //     } else if (myColor === 'red'){
        //         return 'Strawberries are red';
        //     } else {
        //         return 'I don\'t know anything about ' + myColor;
        //     }
        // }
// console.log(analyzeColor('red'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('cyan'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//
//         console.log(randomColor + ": " + analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
        function  analyzeColor(myColor) {
            switch (myColor) {
                case 'blue':
                    return 'Blue is the color of the sky';
                    // break; //return acts as a break, don't have to use it but should
                case 'red':
                    return 'Strawberries are red';
                    // break;
                default :
                    return 'Never heard of ' + myColor;
                    // break;
            }
        }
        console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userPrompt = analyzeColor(prompt('what is your favorite color?')).toLowerCase();
// alert(userPrompt);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculatedTotal(luckyNumber, totalBill){
//     var percentage;
//     switch(luckyNumber){
//         case(1):
//             percentage = .10;
//             break;
//         case(2):
//             percentage = .25;
//             break;
//         case(3):
//             percentage = .35;
//             break;
//         case(4):
//             percentage = .50;
//             break;
//         case(5):
//             percentage = 1;
//             break;
//         default:
//         percentage = 0;
//     }
//     return (totalBill - (totalBill * percentage));
// }
// console.log(calculatedTotal(4, 100));

//==================If/Else for above problem========================
// function calculatedTotal(luckyNumber, totalBill){
//     var percentage;
//     if(luckyNumber === 0){
//         percentage = 0;
//     } else if (luckyNumber === 1) {
//         percentage = .10;
//     } else if (luckyNumber === 2){
//         percentage = .25;
//     } else if(luckyNumber === 3){
//         percentage = .35;
//     } else if (luckyNumber === 4){
//         percentage = .50;
//     } else{
//         percentage = 1;
//     }
//     return (totalBill - (totalBill * percentage));
// }
// console.log(calculatedTotal(4, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//         var luckyNumber = Math.floor(Math.random() * 6);
//
//         var totalBill = parseFloat(prompt('What is your bill total?'));
//
//         alert('Your lucky number is: ' + luckyNumber + '!' + '\n Your bill was: $' + totalBill + '\n Now your bill is: $' + calculatedTotal(luckyNumber, totalBill).toFixed(2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// var confirmNum = confirm('Would you like to enter a number?');
// var number = Number(prompt("What number?"));
//=================================VERSON 3===================================

    function confirmPrompt() {
        if (confirm('Would you like to enter a number') === true) {
            return isNumber();
        } else {
            alert('Not a Number');
        }
    }

  function isNumber() {
        var userNumber = Number(prompt('What number?'));
        if (!isNaN(userNumber) === true) {
            var evenOdd = (userNumber % 2 === 0) ? alert('That number is even!') : alert('That number is an odd-ball!');
            var hundred = userNumber + 100;
            alert('Your number ' + '+ 100 is: ' + hundred);
            var posNeg = (userNumber > 0) ? alert('That number is positive') : alert('That number is negative');
        } else {
            alert('Computer says no. Enter a number');
            isNumber();
        }
    }
   confirmPrompt();

//===============================VERSON 2=====================================

// function numGame() {
//     var confirmNum = confirm('Would you like to enter a number?');
//     var number = Number(prompt("What number?"));
//
//     if (confirmNum === true){
//        if (!isNaN(number) === true){
//             var evenOdd = (number % 2 === 0) ? alert('That number is even!') : alert('That number is an odd-ball!');
//             var hundred = number + 100;
//             alert('Your number ' + '+ 100 is: ' + hundred);
//             var posNeg = (number > 0) ? alert('That number is positive') : alert('That number is negative');
//         } else {
//             alert('Computer says no. Enter a number');
//             numGame();
//         }//end inside if
//     } else {
//         alert('Ok, bye');
//     } // end outside if
// } // function close
//
// numGame();


//=================VERSION ONE==============================================

// function numGame() {
//     var confirmNum = confirm('Would you like to enter a number?');
//     var number = Number(prompt("What number?"));
//
//     if ((confirmNum === true) && (!isNaN(number) === true)) {
//         var evenOdd = (number % 2 === 0) ? alert('That number is even!') : alert('That number is an ODDball!');
//         var hundred = number + 100;
//         alert('Your number ' + '+ 100 is: ' + hundred);
//         var posNeg = (number > 0) ? alert('That number is positive') : alert('That number is negative');
//     }
//     else {
//         alert('So you either want to leave the number game \n OR your input not a valid number, either way, bye.');
//     }
// }
// numGame();