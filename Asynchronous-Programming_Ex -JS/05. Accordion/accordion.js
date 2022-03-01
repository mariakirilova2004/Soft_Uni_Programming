function solution() {
    let mainElement = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    fetch(url)
        .then(rez => rez.json())
        .then(ans => {
            for (const element of ans) {
                let articleElement = document.createElement('div');
                articleElement.classList.add('accordion');
                articleElement.innerHTML = `
                        <div class="head">
                            <span>${element['title']}</span>
                            <button class="button" id="${element['_id']}">More</button>
                        </div>`
                let urldet = `http://localhost:3030/jsonstore/advanced/articles/details/${element['_id']}`
                fetch(urldet)
                    .then(rez => rez.json())
                    .then(ans => {
                        articleElement.innerHTML += 
                            `<div class="extra">
                                <p>${ans['content']}</p>
                            </div>`;
                        let buttonElement = articleElement.querySelector('button');
                        buttonElement.addEventListener('click', (e) =>{
                            buttonElement = e.currentTarget
                            if(buttonElement.textContent == 'More'){
                                buttonElement.textContent = 'Less'
                                let hide = buttonElement.parentNode.parentNode.querySelector('.extra');
                                hide.style.display = 'block';
                            } else{
                                buttonElement.textContent = 'More'
                                let hide = buttonElement.parentNode.parentNode.querySelector('.extra');
                                hide.style.display = 'none';
                            }
                        });
                        mainElement.appendChild(articleElement);
                    })
                }
        })
}

solution();