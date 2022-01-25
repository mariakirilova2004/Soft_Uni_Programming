function generateReport() {
    let outputElement = document.getElementById('output');
    let elements = document.getElementsByTagName('input');
    let rows = document.querySelectorAll('tbody tr');
    let Rez = [];
    for (const row of rows) {
        let rez = {};
        for (let index = 0; index < elements.length; index++) {
            if(elements[index].checked){
                let tds = row.querySelectorAll('td');
                rez[elements[index].name] = tds[index].textContent;
            }
        }
        Rez.push(rez);
    }
    outputElement.value = JSON.stringify(Rez);
}