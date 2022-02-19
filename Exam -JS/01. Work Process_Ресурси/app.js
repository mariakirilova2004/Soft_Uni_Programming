function solve() {
    let HireButton = document.getElementById('add-worker');
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    HireButton.addEventListener('click', (e) => {
        e.preventDefault();
        if(firstNameElement.value.length > 0 && lastNameElement.value.length > 0 && emailElement.value.length > 0 && birthElement.value.length > 0 && positionElement.value.length > 0 && salaryElement.value.length > 0){
            let bodyElement = document.getElementById('tbody');
            let trElement = document.createElement('tr');
            let tdFirstNameElement = document.createElement('td');
            tdFirstNameElement.textContent = firstNameElement.value;
            firstNameElement.value = '';
            trElement.appendChild(tdFirstNameElement);
            let tdSecondNameElement = document.createElement('td');
            tdSecondNameElement.textContent = lastNameElement.value;
            lastNameElement.value = '';
            trElement.appendChild(tdSecondNameElement);
            let tdEmailElement = document.createElement('td');
            tdEmailElement.textContent = emailElement.value;
            emailElement.value = '';
            trElement.appendChild(tdEmailElement);
            let tdDateOfBirthElement = document.createElement('td');
            tdDateOfBirthElement.textContent = birthElement.value;
            birthElement.value = '';
            trElement.appendChild(tdDateOfBirthElement);
            let tdPositionElement = document.createElement('td');
            tdPositionElement.textContent = positionElement.value;
            positionElement.value = '';
            trElement.appendChild(tdPositionElement);
            let tdSalaryElement = document.createElement('td');
            tdSalaryElement.textContent = salaryElement.value;
            salaryElement.value = '';
            trElement.appendChild(tdSalaryElement);
            let tdButtonsElement = document.createElement('td');
            let tdFiredButtonElement = document.createElement('button');
            tdFiredButtonElement.classList.add('fired');
            tdFiredButtonElement.textContent = 'Fired';
            let tdEditButtonElement = document.createElement('button');
            tdEditButtonElement.classList.add('edit');
            tdEditButtonElement.textContent = 'Edit';
            tdButtonsElement.appendChild(tdFiredButtonElement);
            tdButtonsElement.appendChild(tdEditButtonElement);
            trElement.appendChild(tdButtonsElement);
            bodyElement.appendChild(trElement);
            let sumElement = document.getElementById('sum');
            sumElement.textContent = (Number(sumElement.textContent) + Number(tdSalaryElement.textContent)).toFixed(2);
            tdEditButtonElement.addEventListener('click', (e) => {
                firstNameElement.value = tdFirstNameElement.textContent;
                lastNameElement.value = tdSecondNameElement.textContent;
                emailElement.value = tdEmailElement.textContent;
                birthElement.value = tdDateOfBirthElement.textContent;
                positionElement.value = tdPositionElement.textContent;
                salaryElement.value = tdSalaryElement.textContent;
                sumElement.textContent = (Number(sumElement.textContent) - Number(tdSalaryElement.textContent)).toFixed(2);
                tdFirstNameElement.textContent = '';
                tdSecondNameElement.textContent = '';
                tdEmailElement.textContent = '';
                tdDateOfBirthElement.textContent = '';
                tdPositionElement.textContent = '';
                tdSalaryElement.textContent = '';
                e.currentTarget.parentNode.parentNode.remove();
            });
            tdFiredButtonElement.addEventListener('click', (e) => {
                sumElement.textContent = (Number(sumElement.textContent) - Number(tdSalaryElement.textContent)).toFixed(2);
                e.currentTarget.parentNode.parentNode.remove();
            });
        }
    });
    let EditButtonsElements = document.querySelectorAll('button edit');
}
solve()