class List{
    constructor(){
        this.list = [];
        this.size = 0;
    }
    add(element){
        this.list.push(element);
        this.list.sort((a, b) => {
            return a - b;
        });
        this.size = this.list.length;
        return this;
    }
    remove(index){
        if (index >= this.list.length || index < 0) throw new Error;
        else this.list.splice(index, 1);
        this.size = this.list.length;
        this.list.sort((a, b) => {
            return a - b;
        });
        return this;
    }
    get(index){
        if (index >= this.list.length || index < 0) throw new Error;
        else{
            this.list.sort((a, b) => {
                return a - b;
            });
            this.size = this.list.length;
            return this.list[index]
        } 
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
