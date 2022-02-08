class Stringer{
    constructor(innerString, innerLength){
        this.innerLength = Number(innerLength);
        this.innerString = innerString;
    }

    increase(value){
        this.innerLength += Number(value);
    }

    decrease(value){
        if(this.innerLength - Number(value) < 0) this.innerLength = 0;
        else this.innerLength -= Number(value);
    }

    toString(){
        if(this.innerLength == 0) return '...';
        else {
            let dot = '';
            if(this.innerLength < this.innerString.length)
            {
                dot = '...';
            }
            return this.innerString.slice(0, this.innerLength) + dot;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
