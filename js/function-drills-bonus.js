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

    // var vowels = ["a","e","i","o","u"];
    // if (vowels.indexOf(letter.toLowerCase()) >= 0) {
    //     return;
    // }

    console.log(isVowel('a'),'a ' + 'true');
    console.log(isVowel('b'), 'b ' + 'false');
    //=======================================================================================
    // Make a function named isConsonant(letter)
    function isConsonant(letter){
        if(letter !== isVowel(letter)){
            return true;
        };
    }
    // console.log(isConsonant('a'), 'a ' + 'false');
    // console.log(isConsonant('c'), 'c ' + 'true');
    //=======================================================================================
    // Make a function named isCapital(letter)
    //=======================================================================================
    // Make a function named isLowerCase(letter)
    //=======================================================================================
    // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    //=======================================================================================
    // Make a function named isSpace(letter) that returns if a character is a space character
    //=======================================================================================
    // Make a function named isZero(number)
    //=======================================================================================
    // Make a function named notZero(input) that returns true if the input is not zero
    //=======================================================================================
    // Write a function named lowerCase(string)
    //=======================================================================================
    // Write a function named double(n) that returns a number times two
    //=======================================================================================
    // Write a function named triple(n) that returns a number times 3
    //=======================================================================================
    // Write a function named quadruple(n) that returns a number times 4
    //=======================================================================================
    // Write a function named half(n) that returns 1/2 of the provided input
    //=======================================================================================
    // Write a function named subtract(a, b) that returns a minus b
    //=======================================================================================
    // Write a function named multiply(a, b) that returns the product of a times b
    //=======================================================================================
    // Write a function named divide(a, b) that returns a divided by b
    //=======================================================================================
    // Write a function named remainder(a, b) that returns the remainder after dividing a by b
    //=======================================================================================
    // Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
    //=======================================================================================
    // Write a function named cube(n) that returns n * n * n
    //=======================================================================================
    // Write a function named squareRoot(n) that returns the square root of the input
    //=======================================================================================
    // Write a function named cubeRoot(n) that returns the cube root of the input
    //=======================================================================================
    // Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
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