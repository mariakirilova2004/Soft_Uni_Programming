function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = input;
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent ='[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })
    li.appendChild(deleteElement);
    ul.appendChild(li);
}