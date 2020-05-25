// console.log(githubToken);

function githubUserName(username) {
    let githubToken = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_API}`}});

    // const bucket = [];
    githubToken.then(response => response.json())
        .then(events => console.log(new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString()))

        // .then(event => {
        //     event.filter(function (n) {
        //         console.log((n.type === 'PushEvent'));
        //     })
        // })
                // .then(newAry => {
                //      newAry = bucket.filter(function (n) {
                //         n === "PushEvent";
                //         console.log(newAry);
                //     });
                // })



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




//Problem 2
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject();
        }, num);
    });
}
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


