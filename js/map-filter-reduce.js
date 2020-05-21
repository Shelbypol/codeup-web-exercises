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

let lang3 = users.filter(n => n.languages.length >= 3);
console.log(lang3);

let emailAddress =  users.map(n => n.email);
console.log(emailAddress);

let experiance = users.reduce((years, user) => {
       return years + user.yearsOfExperience;
    }, 0);
console.log(experiance/users.length);

// let longestEmail = users.reduce((longest, person) => (longest > person.email.length) ? longest : person.email, 0);
// console.log(longestEmail);

let longestEmail = users.reduce((longEmail, user) =>
    (longEmail.email.length > user.email.length) ? longEmail : user, {email : ''});
console.log(longestEmail.email);
//longestEmail.email

let instructors = users.reduce((instructorNames, instructor) =>
    `${instructorNames} ${instructor.name}`, 'Your instructors are:');
console.log(instructors);


// cheesesHTML = cheeses.filter((cheese) => cheese.length <= 12).map((cheese) => `<li>${cheese}</li>`).reduce((finalHTML, li) => finalHTML + li, "<ul>") + "</ul>";

// let bestSalesPerson = salesPeople.reduce((bestSalesPerson, person) => (bestSalesPerson.units > person.units) ? bestSalesPerson : person, {units: 0});


