function sumTable() {
    let rowsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let sumElement = document.getElementById("sum");
    let sum = Array.from(rowsElements).reduce((a, b) =>{
        let curr = Number(b.textContent);
        return a += curr;
    }, 0)
    sumElement.textContent = sum;
}