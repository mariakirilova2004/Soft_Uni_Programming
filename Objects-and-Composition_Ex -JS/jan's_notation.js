function jans_notation(array) {
    let calc = {
        nums: [],
        add(element){
            this.nums.push(Number(element));
        },
        plus(){
            let num1 = this.nums.pop();
            let num2 = this.nums.pop();
            this.nums.push(Number(num1 + num2));
        },
        minus(){
            let num1 = this.nums.pop();
            let num2 = this.nums.pop();
            this.nums.push(Number(num2 - num1));
        },
        star(){
            let num1 = this.nums.pop();
            let num2 = this.nums.pop();
            this.nums.push(Number(num1 * num2));
        },
        div(){
            let num1 = this.nums.pop();
            let num2 = this.nums.pop();
            this.nums.push(Number(num2 / num1));
        }
    };
    flag = false;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == '+'){
            if(calc.nums.length == 1){
                console.log('Error: not enough operands!')
                flag = true;
                break;
            }
            calc.plus()
        } else if(element == '-'){
            if(calc.nums.length == 1){
                console.log('Error: not enough operands!')
                flag = true;
                break;
            }
            calc.minus();
        } else if(element == '*'){
            if(calc.nums.length == 1){
                console.log('Error: not enough operands!')
                flag = true;
                break;
            }
            calc.star();
        } else if(element == '/'){
            if(calc.nums.length == 1){
                console.log('Error: not enough operands!')
                flag = true;
                break;
            }
            calc.div();
        } else{
            calc.add(element);
        }
    }
    if(calc.nums.length == 1 && flag == false){
        console.log(calc.nums[0]);
    } else if(flag == false){
        console.log('Error: too many operands!')
    }
}

jans_notation([15,
    '/']
   
   
   
   );