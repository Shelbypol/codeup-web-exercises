// console.log(githubToken);

function githubUserName(username) {
    let githubToken = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API}`}});

    githubToken.then(response => response.json())
        .then(events => (events.filter(user => user.type === "PushEvent")))
        .then(date => console.log(new Date(date[0].created_at).toDateString()))
        .catch(error => console.log(error));
}

githubUserName('Shelbypol'); //put console.log here in the last .then


//Problem 2
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject();
        }, num * 1000);
    });
}

wait(1).then(() => console.log('You\'ll see this after 1 second'));
wait(3).then(() => console.log('You\'ll see this after 3 seconds'));


