function solve() {
    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', Add);
    function Add(event){
        event.preventDefault();
        let taskText = document.getElementById('task').value;
        let descriptionText = document.getElementById('description').value;
        let dueDateText = document.getElementById('date').value;
        if (taskText.length > 0 && descriptionText.length > 0 && dueDateText.length > 0){
            let open = document.querySelector('section div h1[class="orange"]').parentNode.parentNode.childNodes[3];
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = taskText;
            article.appendChild(h3);

            let p1 = document.createElement('p');
            p1.textContent = `Description: ${descriptionText}`;
            article.appendChild(p1);

            let p2 = document.createElement('p');
            p2.textContent = `Due Data: ${dueDateText}`;
            article.appendChild(p2);

            let div = document.createElement('div');
            div.className = 'flex';
            article.appendChild(div);

            let buttonStart = document.createElement('button');
            buttonStart.className = 'green';
            buttonStart.textContent = 'Start';
            buttonStart.addEventListener('click', Start);
            div.appendChild(buttonStart);

            let buttonDelete = document.createElement('button');
            buttonDelete.className = 'red';
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', Delete);
            div.appendChild(buttonDelete);
            open.appendChild(article);
            document.getElementById('task').value = '';
            document.getElementById('description').value = '';
            document.getElementById('date').value = '';
        }
    }
    function Start(event){
        event.preventDefault();
        let article = event.currentTarget.parentNode.parentNode;
        let div = document.getElementById('in-progress');
        let buttonDelete = article.getElementsByTagName('button')[0];
        buttonDelete.textContent = 'Delete';
        buttonDelete.className = 'red';
        buttonDelete.addEventListener('click', Delete);
        let buttonFinish = article.getElementsByTagName('button')[1];
        buttonFinish.textContent = 'Finish';
        buttonFinish.className = 'orange';
        buttonFinish.addEventListener('click', Finish);
        div.appendChild(article);
    }
    function Delete(event){
        event.preventDefault();
        let article = event.currentTarget.parentNode.parentNode;
        article.parentNode.removeChild(article);
    }
    function Finish(event){
        event.preventDefault();
        let article = event.currentTarget.parentNode.parentNode;
        let div = document.querySelector('section div h1[class="green"]').parentNode.parentNode.childNodes[3];
        article.removeChild(article.querySelector('div'));
        div.appendChild(article);
    }
}