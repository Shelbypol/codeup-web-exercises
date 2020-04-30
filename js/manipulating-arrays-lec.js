"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
//these methods return the new length of the array
//modifies the original array
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.
numStrings.push('eight');

console.log(numStrings.push('eight'));

//original array has been modified
console.log(numStrings);


// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.
console.log(numStrings.unshift('two'));
numStrings.unshift('two'); //will now be index[0]


// TO DO: Use the .push method to add 'nine' and 'ten'.
console.log(numStrings.push('nine', 'ten'));;
console.log(numStrings);
// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
console.log(numStrings.unshift('zero' , 'one'));
// console.log(numStrings.unshift('one'));
console.log(numStrings);

// Console log your results.
console.log('');

/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
//these elements return the element you are removing
//modifies original array
var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
// console.log(activeCohorts.pop());;
// console.log(activeCohorts);
// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
// console.log(activeCohorts.shift());

var bayes = activeCohorts.shift(); //can assign to store variable that i'm removing
var grad = [];
// grad.push(bayes);
// console.log(grad);
console.log(activeCohorts);
// What do we get when we log the return of these methods?

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.

activeCohorts.pop();
activeCohorts.shift();
activeCohorts.shift();
console.log(activeCohorts);



console.log('');
/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
//these methods return a number representing the index of the element in the aray

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
console.log(fruit.indexOf('apples'));
// TO DO TOGETHER: Find the last index of 'apples' in the array
console.log(fruit.lastIndexOf('apples'));;
// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
console.log(fruit); //before
if(fruit.lastIndexOf('grapes') === fruit.length - 1){
    fruit.pop();
}
    console.log(fruit); //after removing last element
// Console log your new array.

console.log('');
/* ***************************************************************
* 							SLICING
*************************************************************** */
//Does not modify the original, instead returns a new one
//allows us to copy a portion of the array
//does not include the last index

//can pass whatever as long as it evaluates to a number

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.
var ganymedeInstructors = instructors.slice(0, instructors.length-4); //instructors.indexOf('vivian');
console.log(ganymedeInstructors);

// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.
var fotunaInstructors = instructors.splice(3);
console.log(fotunaInstructors);

console.log('');
/* ***************************************************************
* 							REVERSING
*************************************************************** */

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?

//modifies og array and will return the modified array
console.log(instructors);
console.log(instructors.reverse());


console.log('');
/* ***************************************************************
* 							SORTING
*************************************************************** */
//will modify and return the og array
//alphabeital order, numbers first
//booleans sorted alphabetically too;
//if there is a space then it returns at the front because a space is counted before 0

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.
var myString = ['4', 5, 'three', 2, '1' ,true, false, '0' ,''];
//['4','5','three', '2', '1'];
//when it spits it out it preserves the original data types
console.log(myString.sort());;


// console.log(instructors);
console.log('');
/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
// does not modify the og array
var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?
var newArray = (submarine.split(' '));
console.log(newArray);
console.log(submarine);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.
var newSubmarine = newArray.join('\n'); // console.log(newArray.join('<br>')
console.log(newSubmarine);