
// console.log(githubToken);

function githubUserName (username){
    let githubToken = fetch (`https://api.github.com/users/${username}/events/public` , {headers: {'Authorization': `token ${GITHUB_API}`}});

    githubToken.then(response => response.json())
        .then(event => console.log(new Date(event[0].created_at).toDateString()))
        .catch(error  => console.log(error));
}

githubUserName('Shelbypol');

filter


// most recent PushEvent 
// look at the type property of each event
//     .filter() ? 
//     new Date() 
//     .toDateString()

