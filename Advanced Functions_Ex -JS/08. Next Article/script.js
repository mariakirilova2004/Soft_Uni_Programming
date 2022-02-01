function getArticleGenerator(articles) {
    let arr = articles.slice();
    let resultDiv = document.getElementById('content');
    let index = 0;
    return function(){
        if(arr.length > 0){
            let article = document.createElement('article');
            article.textContent = arr.shift();
            resultDiv.appendChild(article);
        }
    }
}