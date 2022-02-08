class Hex{
    constructor(value){
        this.number = value;
    }

    valueOf(){
        return this.number;
    }

    toString(){
        let arr = [];
        let num = this.number;
        while(num != 0){
            if(num % 16 == 10) arr.push('A');
            else if (num % 16 == 11) arr.push('B');
            else if (num % 16 == 12) arr.push('C');
            else if (num % 16 == 13) arr.push('D');
            else if (num % 16 == 14) arr.push('E');
            else if (num % 16 == 15) arr.push('F');
            else arr.push(num % 16);
            num = Math.floor(num /= 16);
        }
        arr = arr.reverse();
        return "0x" + arr.join('');
    }

    plus({number}) {
        return new Hex(this.number + number);
    }

    minus({number}) {
        return new Hex(this.number - number);
    }

    parse(string) {
        let rez = [];
        for (let index = 0; index < string.length; index++) {
            const element = string[index];
            if(element == 'A') rez.push(10 * 16 ** index);
            else if (element == 'B') rez.push(11 * 16 ** index);
            else if (element == 'C') rez.push(12 * 16 ** index);
            else if (element == 'D') rez.push(11 * 16 ** index);
            else if (element == 'E') rez.push(14 * 16 ** index);
            else if (element == 'F') rez.push(15 * 16 ** index);
            else rez.push(element * 16 ** index);
        }
        return rez.reduce((a, b) => {return a + b});
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
