function loadRepos() {
	let usernameElement = document.getElementById('username');
	let reposElement = document.getElementById('repos');
	let url = `https://api.github.com/users/${usernameElement.value}/repos`;	
	fetch(url)
		.then(ans => {
			if (ans.status == 404)
				throw new Exception(`Username ${usernameElement.value} cannot be found. Error: ${ans.status}!`)
			else 
				return ans.json()
		})
		.then(ans =>{
			reposElement.innerHTML = '';
			ans.forEach(element => {
				let liElement = document.createElement('li');
				let aElement = document.createElement('a');
				aElement.href = `https://api.github.com/users/${usernameElement.value}/${element.html_url}`;
				aElement.textContent = element.full_name;
				liElement.appendChild(aElement);
				reposElement.appendChild(liElement);
			});
		})
		.catch(error => {
			reposElement.textContent = `${error.message}`;  
		})
}