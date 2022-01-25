function deleteByEmail() {
    let data = Array.from(document.querySelectorAll('tbody tr td:nth-of-type(2)'));
    let input = document.getElementsByTagName('input')[0].value;
    let result = document.getElementById('result');
    let el = data.find(x => x.textContent == input);
    if (el){
        el.parentNode.remove();
        result.textContent = "Deleted.";
    } else{
        result.textContent = "Not found.";
    }

}