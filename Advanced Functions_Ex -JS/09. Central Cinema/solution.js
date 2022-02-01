function solve() {
    onScreenButtonElement = document.getElementsByTagName('button')[0];
    onScreenButtonElement.addEventListener('click', onScreen);
    ClearButtonElement = document.getElementById('archive').childNodes[5];
    ClearButtonElement.addEventListener('click', Clear);
    function onScreen(event){
        event.preventDefault();
        let elements = document.querySelectorAll('div[id="container"] input');
        if (elements[0].value.length != 0 && elements[1].value.length != 0 && elements[2].value != 0){
            let ul = document.getElementsByTagName('ul')[0];
            let list = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = elements[0].value;
            list.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${elements[1].value}`;
            list.appendChild(strong);

            let div = document.createElement('div');
            list.appendChild(div);

            let strong2 = document.createElement('strong');
            strong2.textContent = Number(elements[2].value).toFixed(2);
            div.appendChild(strong2);

            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);

            let button = document.createElement('button');
            button.textContent = 'Archive'
            button.addEventListener('click', Archive);
            div.appendChild(button);

            ul.appendChild(list);

            elements[0].value = '';
            elements[1].value = '';
            elements[2].value = '';
        }
    }
    function Archive(event){
        event.preventDefault();
        let element = event.currentTarget.parentNode;
        let br = Number(element.childNodes[1].value);
        let name = element.parentNode.childNodes[0].textContent;
        let price = Number(element.childNodes[0].textContent);
        if ( br > 0){
            let ul = document.getElementsByTagName('ul')[1];
            let list = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = name;
            list.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${Number(price * br).toFixed(2)}`;
            list.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete'
            button.addEventListener('click', Delete);
            list.appendChild(button);

            ul.appendChild(list);
            element.parentNode.parentNode.removeChild(element.parentNode)
        }
    }
    function Delete(event){
        event.preventDefault();
        let element = event.currentTarget.parentNode;
        element.parentNode.removeChild(element)
    }
    function Clear(event){
        event.preventDefault();
        let ulElement = event.currentTarget.parentNode.childNodes[3];
        while (ulElement.firstChild) {
            ulElement.firstChild.remove()
        }
    }
}