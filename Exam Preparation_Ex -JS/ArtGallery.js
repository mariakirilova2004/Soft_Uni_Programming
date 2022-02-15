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
        this.listOfArticles.forEach(element => {
            if (element['articleModel'] == articleModel && element['articleName'] == articleName){
                flag = false;
                element['quantity'] += Number(quantity);
                break;
            }
        });
        if (flag){
            this.listOfArticles.push({"articleModel": articleModel.toLowerCase(), articleName, 'quantity': Number(quantity) });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest (guestName, personality){
        if (this.guests.keys.includes(guestName)){
            throw new Error(`${guestName} has already been invited.`);
        } else{
            let points = 50;
            if (personality == "Vip") points = 500;
            if (personality == 'Middle') points = 250;
            this.guests.push({guestName, points, 'purchaseArticle': 0});
        }
    }
    buyArticle ( articleModel, articleName, guestName){
        let article;
        let flag = true;
        this.listOfArticles.forEach(element => {
            if (element['articleModel'] == articleModel && element['articleName'] == articleName){
                flag = false;
                article =element;
                break;
            }
        });
        if (flag){
            throw new Error("This article is not found.");
        }
        if (article['quantity'] == 0) throw new Error(`The ${articleName} is not available.`);
        if (this.guests.values.includes(guestName)) throw new Error(`This guest is not invited.`);
    }

    
};

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
