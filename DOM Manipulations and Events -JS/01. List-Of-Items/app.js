function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = input;
    ul.appendChild(li);
}