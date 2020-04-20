"use strict";

console.log('Hello from external Javascript');

alert('Welcome to my website!');

var usersFavoriteColor = prompt('what\'s your favorite color?');

alert(usersFavoriteColor + ' is my favorite color too!');

// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.


// ====================== Problem 1)

var littleMermaid = prompt('How many days would you like to rent: Little Mermaid ');
var brotherBear =  prompt('How many days would you like to rent: Brother Bear');
var hurcules = prompt('How many days would you like to rent: Hurcules');
var daysRented = parseFloat(littleMermaid) + parseFloat(brotherBear) + parseFloat(hurcules);
var moviePriceUsCurrencyPerDay = prompt("What is the daily rental rate in dollars");

var totalRentalCost = daysRented * moviePriceUsCurrencyPerDay;

alert('Total movie rental cost is $' + totalRentalCost.toFixed(2));


// ======================== Problem 2)

var googleWeeklyHours = prompt('How many weekly hours did you work at google:');
var googleRatePerHour = prompt('Google hourly rate');

var amazonWeeklyHours = prompt('How many weekly hours did you work at amazon:');
var amazonRatePerHour = prompt('amazon hourly rate');

var facebookWeeklyHours = prompt('How many weekly hours did you work at facebook:');
var facebookRatePerHour = prompt('facebook hourly rate');

var totalUsWeeklyCurrencyEarned = ((parseFloat(googleWeeklyHours)) * parseFloat(googleRatePerHour)) + ((parseFloat(amazonWeeklyHours)) * parseFloat(amazonRatePerHour)) + ((parseFloat(facebookWeeklyHours)) * parseFloat(facebookRatePerHour));

alert("You've earned $" + totalUsWeeklyCurrencyEarned.toFixed(2) + " this week");


// ========================== Problem 3)
var classNotFull = false;
var noClassConflict = true;

var canEnroll = classNotFull && noClassConflict;
alert('Can enroll at this time: ' + canEnroll);

//=========================== Problem 4)
var isOfferAvailable = confirm('offer is not expired'); //is it expired
var isPremiumMember = confirm('Confirm customer is premium member');
var numItemsPurchased = parseInt(prompt('How many products did you buy?'));

var isOfferApplied = isOfferAvailable && (isPremiumMember || numItemsPurchased > 2);
if(isOfferApplied === true){
    alert('Offer has been applied!');
} else {
    alert('Offer not available');
}