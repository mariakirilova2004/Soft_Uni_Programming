function solve() {
    let tableElement = document.getElementsByTagName('table');
    let rowNums;
    let textElement = document.querySelector('div[id="check"] p');
    let checkButtonElement = document.querySelectorAll('button')[0];
    let clearButtonElement = document.querySelectorAll('button')[1];
    checkButtonElement.addEventListener('click', () => {
        let rowElements = document.querySelectorAll('tbody tr');
        let flag = false;
        let rowNumsValue = [];
        for (const row of rowElements) {
            rowNums = row.querySelectorAll('td input');
            if (Number(rowNums[0].value) + Number(rowNums[1].value) + Number(rowNums[2].value) != 6){
                flag = true;
                break;
            } else if (Number(rowNums[0].value) != Number(rowNums[1].value) && Number(rowNums[1].value) != Number(rowNums[2].value)){
            } else{
                flag = true;
                break;
            }
            let arr = [Number(rowNums[0].value), Number(rowNums[1].value), Number(rowNums[2].value)];
            rowNumsValue.push(arr);
        }
        if (flag == 'false'){
            for (let indexcol = 0; indexcol < rowElements.length; indexcol++) {
                if (rowNumsValue[0][indexcol] + rowNumsValue[1][indexcol]  + rowNumsValue[2][indexcol]  != 6){
                    flag = true;
                    break;
                } else if (rowNumsValue[0][indexcol]  != rowNumsValue[1][indexcol]  && rowNumsValue[1][indexcol]  != rowNumsValue[2][indexcol] ){
                } else{
                    flag = true;
                    break;
                }
            }
        }
        if(flag){
            tableElement[0].style.borderStyle = 'solid';
            tableElement[0].style.borderColor = 'red';
            tableElement[0].style.borderWidth = '2px';
            textElement.textContent = "NOP! You are not done yet...";
            textElement.style.color = 'red';
        } else{
            tableElement[0].style.borderStyle = 'solid';
            tableElement[0].style.borderColor = 'green';
            tableElement[0].style.borderWidth = '2px';
            textElement.textContent = "You solve it! Congratulations!";
            textElement.style.color = 'green';
        }
    });
    clearButtonElement.addEventListener('click', () => {
        let rowElements = document.querySelectorAll('tbody tr');
        for (const row of rowElements) {
            let rowNums = Array.from(row.querySelectorAll('td input'));
            rowNums.forEach(element => {
                element.value = '';
            }); 
        }
        tableElement[0].style.borderStyle = 'none';
        tableElement[0].style.borderColor = 'none';
        tableElement[0].style.borderWidth = 'none';
        textElement.textContent = "";
        textElement.style.color = 'none';
    });
}