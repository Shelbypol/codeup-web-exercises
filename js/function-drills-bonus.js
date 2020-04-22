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
    //*********************//=======================================================================================
    // Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b) {
        return a/b;
    }
    // console.log(remainder(10, 5), 2);
    // console.log(remainder(15, 3), 5);
    // console.log(remainder(100, 10), 10);

    //=======================================================================================
    // Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
    function modelo(a, b) {
        return a % b;
    }
    // console.log(modelo(10, 5), 0);
    // console.log(modelo(15, 2), 2);
    // console.log(modelo(100, 9), 1);

    //=======================================================================================
    // Write a function named cube(n) that returns n * n * n
    function cube(n, x){
        return Math.pow(n, x);
    }
    // console.log(cube(3 , 3), 27);
    // console.log(cube(2 , 3), 8);
    // console.log(cube(4 , 3), 64);

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
        return Math.sign(number);
    }
    console.log(invertSign(-3), 3);
    console.log(invertSign(2), 3);
    console.log(invertSign('the'), false);
    //=======================================================================================
    // Write a function named degreesToRadians(number)
    //=======================================================================================
    // Write a function named radiansToDegrees(number)
    //=======================================================================================
    // Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    //=======================================================================================
    //     Make a function named trim(string) that removes empty spaces before and after the input.
    //=======================================================================================
    //     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    //=======================================================================================
    // Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    //=======================================================================================
    //     Make a function named not(input) returns the input with a flipped boolean
    //=======================================================================================
    // Make a function named notNot(input) that the negation of the negation of the input.
    //=======================================================================================
    //     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    //=======================================================================================
    // Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    //=======================================================================================
    // Write a function called reverseString(string) that reverses a string
    //=======================================================================================
    // Make a function named absoluteValue(number) that returns the absolute value of a number.
    //=======================================================================================
    //     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    //=======================================================================================













})();