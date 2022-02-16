class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture": 200,"photo": 50,"item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        if (this.possibleArticles[articleModel.toLowerCase()] == undefined){
            throw new Error("This article model is not included in this gallery!");
        }
        let flag = true;
        for (let index = 0; index < this.listOfArticles.length; index++) {
            const element = this.listOfArticles[index];
            if (element['articleModel'] == articleModel.toLowerCase() && element['articleName'] == articleName){
                flag = false;
                element['quantity'] += Number(quantity);
                break;
            }
        }
        if (flag){
            this.listOfArticles.push({"articleModel": articleModel.toLowerCase(), articleName, 'quantity': Number(quantity) });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest (guestName, personality){
        if (this.guests.some(obj => obj['guestName'] == guestName)){
            throw new Error(`${guestName} has already been invited.`);
        } else{
            let points = 50;
            if (personality == "Vip") points = 500;
            if (personality == 'Middle') points = 250;
            this.guests.push({guestName, points, 'purchaseArticle': 0});
            return `You have successfully invited ${guestName}!`;
        }
    }
    buyArticle ( articleModel, articleName, guestName){
        let article;
        let guest;
        let flag = true;
        this.listOfArticles.forEach(element => {
            if (element['articleModel'] == articleModel.toLowerCase() && element['articleName'] == articleName){
                flag = false;
                article =element;
            }
        });
        if (flag){
            throw new Error("This article is not found.");
        }
        if (article['quantity'] == 0) return `The ${articleName} is not available.`;
        if (!this.guests.some(obj => obj['guestName'] == guestName)) return `This guest is not invited.`;
        else {
            guest = this.guests.find(obj => obj['guestName'] == guestName); 
        }
        if (this.possibleArticles[articleModel.toLowerCase()] <= guest['points']) {
            guest['points'] -= this.possibleArticles[articleModel.toLowerCase()];
            article['quantity']--;
            guest['purchaseArticle']++;
        }
        else{
            return `You need to more points to purchase the article.`;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`;
    }
    showGalleryInfo (criteria){
        let str = '';
        if (criteria == 'article'){
            str += `Articles information:`;
            this.listOfArticles.forEach(element => {
                str += `\n${element['articleModel']} - ${element['articleName']} - ${element['quantity']}`;
            });
        } else{
            str += `Guests information:`;
            this.guests.forEach(element => {
                str += `\n${element['guestName']} - ${element['purchaseArticle']}`;
            });
        }
        return str.toString();
    }
};

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


