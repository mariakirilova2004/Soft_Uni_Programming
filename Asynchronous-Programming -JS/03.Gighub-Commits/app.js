function loadCommits() {
    let usernameElement = document.getElementById('username');
    let repoElement = document.getElementById('repo');
    let ulElement = document.getElementById('commits');
    let url = `https://api.github.com/repos/${usernameElement.value}/${repoElement.value}/commits`;
    fetch(url)
        .then(ans => {
            if(ans.status == 404){
                let liElement = document.createElement('li');
                liElement.textContent = `Error: ${ans.status} (Not Found)`;
                ulElement.appendChild(liElement);
            } else{
                return ans.json()
            }
        })
        .then(an => {
            an.forEach(element => {
                let liElement = document.createElement('li');
                liElement.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                ulElement.appendChild(liElement);
            });
        })
        .catch(error => {
            console.log(error.message)
        })
}