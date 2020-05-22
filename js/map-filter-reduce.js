'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Problem 1
let lang3 = users.filter(user => user.languages.length >= 3);
console.log(lang3);
//Instructor Solution


//Problem 2
let emailAddress =  users.map(user => user.email);
console.log(emailAddress);
//Instructor Solution


//Problem 3
let experiance = users.reduce((years, user) => {
       return years + user.yearsOfExperience;
    }, 0);
console.log(experiance/users.length);
// //Instructor Solution
const totalExp = users.reduce((total, user) => {
    return (total + user.yearsOfExperience);
}, 0);
const averageExp = totalExp/users.length;
console.log(averageExp);

//Problem 4
let longestEmail = users.reduce((longEmail, user) =>
    (longEmail.length > user.email.length) ? longEmail : user.email, '');
console.log(longestEmail);
//Instructor Solution


//Problem 5
// let instructors = users.reduce((instructorNames, instructor) =>
//     `${instructorNames} ${instructor.name}` , 'Your instructors are:');
// console.log(instructors);
//add substrings to get correct capitalization
//Instructor Solution
let instructors = users.reduce((instructorNames, instructor, index) => {
    if (index < users.length - 1) {
        return `${instructorNames} ${instructor.name},`
    } else {
        return `${instructorNames} ${instructor.name}.`
    }
    }, 'Your instructors are: ' );
console.log(instructors);


let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages){
        if(!langList.includes(lang)){
            langList.push(lang);
        }
    }
    return langList;
}, []);
console.log(uniqueLangs);

//or
let arr = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        langs.push(lang);
    }
let set = new Set(arr);

let uniqueLangsQuick = Array.from(set)
    // new Set(users.reduce((langs, user) => {
    // for (let lang of user.languages) {
    //     langs.push(lang);
    // }
}, [] )));


// let languageList = users.map(user => user.languages).map(language => language.split(',')).join(',').join(',').split(',').sort().reduce((langList, lang)=> {
//     const length = langList.length;
//     if(length === 0 || langList[length - 1] !== lang  ){
//         langList.push(lang);
//     }
//     return langList;
// }, []);

// console.log(languageList);
//Bonus
// const uniqueLang = arr => arr.reduce((langStr, user) =>
//     (langStr + user.languages), '').split(',');
//
// // console.log(typeof (uniqueLang(users)));
// console.log(uniqueLang(users));

// let arrayLang = (uniqueLang(users).split(','));
// console.log(arrayLang);
//
// let arrayLang1 = (uniqueLang(users).split(','));
//
// for(let i = 0; i < arrayLang.length; i ++){
//     for(let i = 0; i < arrayLang1.length; i ++)
//         if(arrayLang[i] === arrayLang1[i]){
//             console.log(arrayLang.slice(i, 1));
//        // console.log(uniqueLang(users));
//     }
//
// }



// let langp = users.filter(n => n.languages.length >= 3);
// console.log(lang3);

// let answer =  arrayLang.forEach(function (lang) {
  //       if (lang) {
  //           arrayLang.slice(lang, 1);
  //           // return uniqueLang(users);
  //       }
  //   });
// console.log(answer);


// (langStr + user.languages + ','), []);



