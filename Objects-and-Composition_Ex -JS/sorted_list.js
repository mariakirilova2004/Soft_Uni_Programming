function createSortedList() {
    let list = {
        arr: [],
        add(element){
            this.arr.push(element);
            this.arr.sort((a, b) => a-b);
        },
        remove(index){
            if(index >= 0 && index < size) {
                this.arr.splice(index, 1);
                this.arr.sort((a, b) => a-b);
            } 
        },
        get(index){
            if(index >= 0 && index < size){
                 return this.arr[index];
            }
        },
        size: this.arr.length
    }
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
