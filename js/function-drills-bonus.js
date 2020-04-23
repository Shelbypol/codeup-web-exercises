(function(){

'use strict'
    // =========Functions using conditionals but not loops or arrays:========

    //     Make a function named isOdd(number)
    function isOdd(num) {
        return num % 2 !== 0;
    }
    // console.log(isOdd(3),true + ' odd');
    // console.log(isOdd(4),false + ' even');
    // console.log(isOdd(3.1),true + ' odd');
    //===================================================================================
    // Make a function named isEven(number)
    function isEven(num){
        return num % 2 === 0;
    }
    // console.log(isEven(3),false + ' odd');
    // console.log(isEven(4),true + ' even');
    // console.log(isEven(3.1),false + ' odd');
    //=====================================================================================
    // Make a function named identity(input) that returns the input exactly as provided.
    function identity(input) {
        return input;
    }
    // console.log(identity('lkjlkj'));
    // console.log(identity('abcdefg'));
    //======================================================================================
    //     Make a function named isFive(input)
    function isFive(x) {
        return x === 5 || x === '5';
    }
    // console.log(isFive(10), false);
    // console.log(isFive('5'), true);
    // console.log(isFive(5), true);
    //=======================================================================================
    // Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        return input + 5;
    }
    // console.log(addFive(10), 15);
    // console.log(addFive(5), 10);
    // console.log(addFive(45), 50);
    //=======================================================================================
    //Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(num){
        return num % 5 === 0 ;
    }
    // console.log(isMultipleOfFive(10), true);
    // console.log(isMultipleOfFive(95), true);
    // console.log(isMultipleOfFive(37), false);
    //=======================================================================================
    // Make a function named isThree(input)
    function isThree(num){
        return num === 3 || num === '3';
    }
    // console.log(isThree('3'), true);
    // console.log(isThree(5), false);
    // console.log(isThree(3), true);
    //=======================================================================================
    // Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(num) {
        return num % 3 === 0;
    }
    // console.log(isMultipleOfThree(27), true);
    // console.log(isMultipleOfThree(21), true);
    // console.log(isMultipleOfThree(37), false);
    //=======================================================================================
    // Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(num) {
        return num % 3 === 0 && num % 5 === 0;
    }
    // console.log(isMultipleOfThree(27), false);
    // console.log(isMultipleOfThree(15), true);
    // console.log(isMultipleOfThree(35), false);
    //=======================================================================================
    // Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n){
        return target % n === 0;
    }
    // console.log(isMultipleOf(20, 2), true);
    // console.log(isMultipleOf(15, 4), false);
    // console.log(isMultipleOf(35, 5), true);
    //=======================================================================================
    // Make a function named isTrue(boolean)
    function isTrue(boolean) {
        return boolean === true;
    }
    // console.log(isTrue(isMultipleOf(20, 2)), true);
    // console.log(isTrue(isMultipleOfThree(35)), false);
    // console.log(isTrue(1), false);
    //=======================================================================================
    // Make a function named isFalse(boolean)
    function isFalse(boolean) {
        return (boolean === false);
    }
    // console.log(isFalse(isMultipleOf(20, 2)), false);
    // console.log(isFalse(isMultipleOfThree(35)), true);
    // console.log(isFalse(1), false);
    //=======================================================================================
    // Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(input) {
        return input == true;
    }
    // console.log(isTruthy(2), false);
    // console.log(isTruthy(1), true);
    // console.log(isTruthy(0), true);
    //=======================================================================================
    // Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input){
        return input == false;
    }
    // console.log(isFalsy(""), true);
    // console.log(isFalsy(1), false);
    // console.log(isFalsy(0), true);
    //=======================================================================================
    // Make a function named isVowel(letter)
    function  isVowel(letter) {
        var result;
        result = letter ==='a' || letter === 'e' || letter === 'i' || letter === 'o' || letter ==='u';
        return result;
    }
    // console.log(isVowel('a'),'a ' + 'true');
    // console.log(isVowel('b'), 'b ' + 'false');
    //=======================================================================================
    // Make a function named isConsonant(letter)
    function isConsonant(letter){
        var vowel = 'aeiou'
         return !vowel.includes(letter);
    }
    // console.log(isConsonant('u'), 'u ' + 'false');
    // console.log(isConsonant('b'), 'b ' + 'true');
    // console.log(isConsonant('n'), 'n ' + 'false');
    // console.log(isConsonant('e'), 'e ' + 'true');
    //=======================================================================================
    // Make a function named isCapital(letter)
    function isCapital(letter) {
    return letter === letter.toUpperCase();
    }
    // console.log(isCapital('u'), 'u ' + 'false');
    // console.log(isCapital('B'), 'B ' + 'true');
    // console.log(isCapital('n'), 'n ' + 'false');
    // console.log(isCapital('E'), 'E ' + 'true');

    //=======================================================================================
    // Make a function named isLowerCase(letter)
    function isLowerCase(letter) {
    return letter === letter.toLowerCase();
    }
    // console.log(isLowerCase('u'), 'u ' + 'true');
    // console.log(isLowerCase('B'), 'B ' + 'false');
    // console.log(isLowerCase('n'), 'n ' + 'true');
    // console.log(isLowerCase('E'), 'E ' + 'false');

    //=======================================================================================
    // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(str) {
        var lowerCase = (str === str.toUpperCase()) ? console.log('has uppercase letter/s') : console.log(str);
        return;
    }
    // hasLowerCase('this has only lower case');
    // hasLowerCase('THIS HAS NO LOWER CASE');
    // hasLowerCase('THIS HAS oNE LOWER CASE');

    //=======================================================================================
    // Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(str) {
        var strCopy = " ";
        return str.includes(strCopy)
    }
    // console.log(isSpace('theonedfna dskfn'), true);
    // console.log(isSpace('theonedfnadskfn'), false);

    //=======================================================================================
    // Make a function named isZero(number)
    function isZero(number) {
        return 0 === number;
    }
    // console.log(isZero(3), false);
    // console.log(isZero(0), true);
    // console.log(isZero(5), false);

    //=======================================================================================
    // Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input) {
        return 0 !== input;
    }
    // console.log(notZero(0.3), true);
    // console.log(notZero(0), false);
    // console.log(notZero(5), true);
    //=======================================================================================
    // Write a function named lowerCase(string)
    function lowerCase(str){
        return str.toLowerCase();
    }
    // console.log(lowerCase('THIS IS REALLY ALL CAPS'));
    // console.log(lowerCase('small caps'));

    //=======================================================================================
    // Write a function named double(n) that returns a number times two
    function double(n) {
        return n * 2;
    }
    // console.log(double(0), 0);
    // console.log(double(3), 6);
    // console.log(double(4), 8);

    //=======================================================================================
    // Write a function named triple(n) that returns a number times 3
    function triple(n) {
        return n * 3;
    }
    // console.log(triple(0), 0);
    // console.log(triple(3), 9);
    // console.log(triple(4), 12);

    //=======================================================================================
    // Write a function named quadruple(n) that returns a number times 4
    function quadruple(n){
        return n * 4;
    }
    // console.log(quadruple(0), 0);
    // console.log(quadruple(3), 12);
    // console.log(quadruple(4), 16);

    //=======================================================================================
    // Write a function named half(n) that returns 1/2 of the provided input
    function half(n){
        return n/2;
    }
    // console.log(half(0), 0);
    // console.log(half(10), 5);
    // console.log(half(150), 75);

    //=======================================================================================
    // Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b){
        return a - b;
    }
    // console.log(subtract(0, 8), -8);
    // console.log(subtract(3, 2), 1);
    // console.log(subtract(20, 12), 8);

    //=======================================================================================
    // Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b) {
        return a * b;
    }
    // console.log(multiply(0, 8), 0);
    // console.log(multiply(3, 2), 6);
    // console.log(multiply(3, 5), 15);

    //=======================================================================================
    // Write a function named divide(a, b) that returns a divided by b
    function divide(a, b) {
        return a/b;
    }
    // console.log(divide(0, 8), 0);
    // console.log(divide(6, 2), 3);
    // console.log(divide(12, 3), 4);

    //**********************
    // *********************//=============================================================
    // Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b) {
        return a/b;
    }
    // console.log(remainder(10, 5), 2);
    // console.log(remainder(15, 3), 5);
    // console.log(remainder(100, 10), 10);

    //=======================================================================================
    // Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
    function modulo(a, b) {
        return a % b;
    }
    // console.log(modelo(10, 5), 0);
    // console.log(modelo(15, 2), 2);
    // console.log(modelo(100, 9), 1);

    //=======================================================================================
    // Write a function named cube(n) that returns n * n * n
    function cube(n, x){
        var x = 3;
        return Math.pow(n, x);
    }
    // console.log(cube(3), 27);
    // console.log(cube(2), 8);
    // console.log(cube(4), 64);

    //=======================================================================================
    // Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n) {
        return Math.sqrt(n);
    }
    // console.log(squareRoot(100));
    // console.log(squareRoot(64));
    // console.log(squareRoot(4));
    //=======================================================================================
    // Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n){
        return Math.cbrt(n);
    }
    // console.log(cubeRoot(27),3);
    // console.log(cubeRoot(8),2);
    // console.log(cubeRoot(64), 4);
    //=======================================================================================
    // Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
    function invertSign(number) {
        if(Math.sign(number) === 1){
            return -(number);
        } else if(Math.sign(number) !== 1){
            return (number * -1);
        }
    }
    // console.log(invertSign(-13));
    // console.log(invertSign(65));
    // console.log(invertSign('the'));
    //=======================================================================================
    // Write a function named degreesToRadians(number)
    function degreesToRadians(degrees) {
        return degrees * Math.PI/180
    }
    // console.log(degreesToRadians(13));
    // console.log(degreesToRadians(65));
    // console.log(degreesToRadians(360));
    //=======================================================================================
    // Write a function named radiansToDegrees(number)
    function radiansToDegrees(radians) {

        return radians * 180 /Math.PI;
    }
    // console.log(radiansToDegrees(.22689));
    // console.log(radiansToDegrees(1.134));
    // console.log(radiansToDegrees(6.2831));
    //=======================================================================================
    // Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input) {
        return input.includes('    ') || input.includes(' ') || input.includes('\n');
    }
    // console.log(isBlank('has    tab'));
    // console.log(isBlank('has space'));
    // console.log(isBlank('has \n tab'));
    // console.log(isBlank('hasNoSpace'));
    //=======================================================================================
    //     Make a function named trim(string) that removes empty spaces before and after the input.
    function trim(str) {
        return str.trim();
    }
    // console.log(trim('  trimmed true  '));
    // console.log(trim('notrimmeeded'));

    //=======================================================================================
    //     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2) {
        return input1 == input2;
    }
    // console.log(areEqual(1, true), true);
    // console.log(areEqual(15, '15'), true);
    // console.log(areEqual(100, 100), true);
    //=======================================================================================
    // Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2) {
        return input1 === input2;
    }
    // console.log(areEqual(1, 'two'), false);
    // console.log(areEqual(15, '15'), true);
    // console.log(areEqual(100, 100), true);

    //=======================================================================================
    //     Make a function named not(input) returns the input with a flipped boolean
    function not(input) {
        return !input;
    }
    // console.log(not(true), false);
    // console.log(not(0), true);
    // console.log(not('yhf'), false);
    //=======================================================================================
    // Make a function named notNot(input) that the negation of the negation of the input.
    function noNot(input) {
        return !!input;
    }
    // console.log(noNot(true), true);
    // console.log(noNot(0), false);
    // console.log(noNot('yhf'), true);
    //=======================================================================================
    //     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    function and(predicate1, predicate2) {
        return !!(predicate1 && predicate2);
    }
    // console.log(and(3, '3'), true);
    // console.log(and(true, false), false);
    // console.log(and(1, 0), false);
    //=======================================================================================
    // Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    function or(predicate1, predicate2) {
        return !!(predicate1 && predicate2);
    }
    // console.log(or(3, '3'), true);
    // console.log(or(true, false), true);
    // console.log(or(0, 0), false);
    //=======================================================================================
    // Write a function called reverseString(string) that reverses a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    // console.log(reverseString('the dog'));
    //=======================================================================================
    // Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number) {
        return Math.abs(number);
    }
    // console.log(absoluteValue(-78));
    // console.log(absoluteValue(5));
    // console.log(absoluteValue(-.09));
    //=======================================================================================
    //     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    function rollDice(sides) {
        return Math.floor(Math.random()* sides + 1);
    }
    // console.log(rollDice(6));
    // console.log(rollDice(20));

    //==================================Simple Function Drills===============================

    // Make a function called returnTwo() that returns the number 2 when called
    // Test this function with console.log(returnTwo())
    function  returnTwo() {
        return 2;
    }
    // console.log(returnTwo(4));
    // console.log(returnTwo('google'));
    //=======================================================================================
    // Make a function called sayHowdy() which console.logs the string “Howdy!”
    // Test this function by directly calling sayHowdy()    
// Remember this function does not need a defined return value
    function sayHowdy(str) {
        console.log('Howdy');
    }
    // sayHowdy();
    //=======================================================================================
    // Make a function called returnName() that returns the string of your name
    // Test this function with console.log(returnName())
    function returnName(str) {
        return str;
    }
    // console.log(returnName('Shelby'));
    //=======================================================================================
    // Make a function called addThree() which takes in a number input and returns the number plus 3.
    // Test this function with console.log(addThree(5))
    function addThree(num) {
        return num + 3;
    }
    // console.log(addThree(3));
    //=======================================================================================
    // Make a function called sayString() which returns the string input passed in.
    // Test this function with console.log(sayString('codeup'))
    function sayString(str) {
        return str;
    }
    // console.log(sayString('codeup'));
    // ===================================CHALLENGE FUNCTION DRILLS==========================
    // Write a function called identity(input) that takes in an argument called input and returns that input.
    function identity(input) {
        return input;
    }
    // console.log(identity('this is my identity'))
    //=======================================================================================
    //     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max) {
        min -= 1;
        max +=1;
        return (Math.floor(Math.random() * (max - min) ) + min);
    }
    // console.log(getRandomNumber(5, 10))
    // console.log(getRandomNumber(20, 30));
    //=======================================================================================
    // Write a function called first(input) that returns the first character in the provided string.
    function first(input){
        return input.charAt(0);
    }
    // console.log(first("the answer"), 't');
    // console.log(first("Ants"), 'A');
    //=======================================================================================
    //Write a function called last(input) that returns the last character of a string
    function last(input){
        return input.charAt(input.length-1);
    }
    // console.log(last("the answer"), 'r');
    // console.log(last("Ants"), 's');
    //=======================================================================================
    // Write a function called rest(input) that returns everything but the first character of a string.
    function rest(input){
        return input.substring(1, input.length);
    }
    // console.log(rest("the answer"));
    // console.log(rest("Ants"));
    //=======================================================================================
    //Write a function called reverse(input) that takes a string and returns it reversed.
    function  reverse(input) {
        return input.split('').reverse().join('');
    }
    // console.log(reverse('dog o\' god'));
    //=======================================================================================
    // Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
    function isNumeric(input){
        if (!isNaN(input) === true){
            return true;
        } else{
            return false;
        }
    }
    // console.log(isNumeric(9), true);
    // console.log(isNumeric('the'), false);
    //=======================================================================================
    // Write a function called count(input) that takes in a string and returns the number of characters.
    function count(input) {
        return input.toString().length;
    }
    // console.log(count(42112),5);
    // console.log(count('the'),3);

//=======================================================================================
    // Write a function called add(a, b) that returns the sum of a and b
    function add(a, b) {
        return
    }
    //=======================================================================================
    // Write a function called subtract(a, b) that return the difference between the two inputs.
    //=======================================================================================
    // Write multiply(a, b) function that returns the product
    //=======================================================================================
    // Write a divide(numerator, denominator) function that returns a divided by b
    //=======================================================================================
    // Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    //=======================================================================================
    // Write the function square(a) that takes in a number and returns the number multiplied by itself.
    //=======================================================================================
    // Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
    //=======================================================================================
    // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
    //=======================================================================================









})();