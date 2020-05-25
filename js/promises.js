// console.log(githubToken);

function githubUserName(username) {
    let githubToken = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_API}`}});

    const bucket = [];
    githubToken.then(response => response.json())

        .then(event => {
            event.forEach(function (i) {
                return bucket.push(i.type);
            });
        })
        .then(newAry => {
             newAry = bucket.filter(function (n) {
                n === "PushEvent";
                console.log(newAry);
            });
        })



        // .then(getDate => console.log(new Date(event[0].created_at).toDateString()))


        // })

        .catch(error => console.log(error));
}

githubUserName('Shelbypol');

// .then(event => {
//     let bucket = [];
//     event.forEach(function (i) {
//         bucket.push(i.type);
//     });
//     let newAry = bucket.filter(function (n) {
//         n === "PushEvent";
//         console.log(newAry);
//     });
// })


// most recent PushEvent 
// look at the type property of each event
//     .filter() ? 
//     new Date() 
//     .toDateString()

