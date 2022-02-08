class Textbox {
    #innerValue;
    constructor(selector, regex){
        this._elements = document.querySelectorAll(selector);
        this.#innerValue = '';
        this._invalidSymbols = regex;
        for (const item of this.elements){
            item.addEventListener('input', (e) => {
                this.value = e.target.value;
            })
        }
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return this.#innerValue;
    }

    set value(val){
        this.#innerValue = val;
        for (const item of this.elements) {
            item.value = this.#innerValue;
        }
    }

    isValid(){

        for (let index = 0; index < this.elements.length; index++) {
            if(this._invalidSymbols.test(this.elements[index].value)){
                return false;
            }
        }

        return true;
    }

    
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
