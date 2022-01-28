function encodeAndDecodeMessages() {
    let inputButtonElement = document.querySelectorAll('button')[0];
    let outputButtonElement = document.querySelectorAll('button')[1];
    let inputTextAreaElement = document.querySelectorAll('textarea')[0];
    let outputTextAreaElement = document.querySelectorAll('textarea')[1];
    inputButtonElement.addEventListener('click', () => {
        let text = inputTextAreaElement.value;
        let charCodeArr = [];
        for(let i = 0; i < text.length; i++){
            let num = text.charCodeAt(i) + 1;
            let char = String.fromCharCode(num);
            charCodeArr.push(char);
        }
        inputTextAreaElement.value = '';
        outputTextAreaElement.value = charCodeArr.join('');
    });
    outputButtonElement.addEventListener('click', () => {
        let text = outputTextAreaElement.value;
        let charCodeArr = [];
        for(let i = 0; i < text.length; i++){
            let num = text.charCodeAt(i) - 1;
            let char = String.fromCharCode(num);
            charCodeArr.push(char);
        }
        outputTextAreaElement.value = charCodeArr.join('');
    });
}