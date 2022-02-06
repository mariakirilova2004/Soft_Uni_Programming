function validate(){
    let buttonElement = document.getElementById('submit');
    let validElement = document.getElementById('valid');
            //Company
            let ifCheckedFlag = false;
            let companyElement = document.getElementById('company');
            let companyInfoElement = document.getElementById('companyInfo');
            companyElement.addEventListener('change', () => {
                if (companyElement.checked == true){
                    companyInfoElement.style.display = 'inline-block';
                } else{
                    companyInfoElement.style.display = 'none';
                }
            });
    buttonElement.addEventListener('click', (e) =>{
        e.preventDefault();
        let flagForValidId = 0;

        //Username
        let usernameElement = document.getElementById('username');
        let regex = /[a-zA-Z0-9]{3,20}/gm;
        let flag = usernameElement.value.match(regex);
        if(flag == undefined || flag.length != 1 ){
            usernameElement.style.borderColor = 'red';
            usernameElement.style.border = '';
        } else{
            usernameElement.style.border = 'none';
            flagForValidId++;
        }

        //Password and Confirm-password
        let passwordElement = document.getElementById('password');
        let conPasswordElement = document.getElementById('confirm-password');
        if (passwordElement.value != conPasswordElement.value){
            passwordElement.style.borderColor = 'red';
            passwordElement.style.border = '';
            conPasswordElement.style.borderColor = 'red';
            conPasswordElement.style.border = '';
        } else{
            let regex = /[a-zA-Z0-9_]{5,15}/gm;
            let flag1 = passwordElement.value.match(regex);
            let flag2 = conPasswordElement.value.match(regex);
            if(flag1 == undefined || flag1.length != 1){
                passwordElement.style.borderColor = 'red';
                passwordElement.style.border = '';
            } else{
                passwordElement.style.border = 'none';
                flagForValidId++;
            }  
            if(flag2 == undefined || flag2.length != 1){
                conPasswordElement.style.borderColor = 'red';
                conPasswordElement.style.border = '';
            } else{
                conPasswordElement.style.border = 'none';
                flagForValidId++;
            }             
        }

        //Email
        let emailElement = document.getElementById('email');
        regex = /.+@.+\..+/g;
        flag = emailElement.value.match(regex);
        if(flag == undefined || flag.length != 1 ){
            emailElement.style.borderColor = 'red';
            emailElement.style.border = '';
        } else{
            emailElement.style.border = 'none';
            flagForValidId++;
        }

        //CompanyInfo
        let companyNumberElement = document.getElementById('companyNumber');
        if(companyElement.checked == true){
            if(companyNumberElement.value >= 1000  && companyNumberElement.value <= 9999){
                emailElement.style.border = 'none';
                ifCheckedFlag = true;
            } else{
                emailElement.style.borderColor = 'red';
                emailElement.style.border = '';
            }
        }

        if (companyElement.checked == true && ifCheckedFlag){
            if (flagForValidId == 4) validElement.style.display = 'inline-block';
            else validElement.style.display = 'none';
        } else if(companyElement.checked != true){
            if (flagForValidId == 4) validElement.style.display = 'inline-block';
            else validElement.style.display = 'none';
        } else validElement.style.display = 'none';
    });
}

function validate() {
    // validation variables:
    let namePattern = /^[a-zA-Z0-9]{3,20}$/;
    let passPattern = /^\w{5,15}$/;
    let mailPattern = /^[^@]+@[^@]*\.{1,}[^@]*$/; //maybe need to be diffrend pattern
    let companyNumPattern = /^[1-9][0-9]{3}$/;

    //HTML elements:
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passElement = document.getElementById('password');
    let confirmPassElement = document.getElementById('confirm-password');
    let companyNumElement = document.getElementById('companyNumber');
    let fieldSetElement = document.getElementById('companyInfo');
    let resultDivElement = document.getElementById('valid');
    let checkBoxElement = document.getElementById('company');
    let buttonElement = document.getElementById('submit');

    //checkbox event:

    checkBoxElement.addEventListener('change', (e) => {
        if(e.target.checked){
            fieldSetElement.style.display = 'inline-block';
        } else {
            fieldSetElement.style.display = 'none';
        }
    });

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let name = usernameElement.value;
        let email = emailElement.value;
        let pass = passElement.value;
        let confPass = confirmPassElement.value;
        let companyNum = companyNumElement.value;

        let isCorrectName = namePattern.test(name);
        let isEmailCorrect = mailPattern.test(email);
        let isPassCorrect = passPattern.test(pass);
        let isPassConfirmSameValue = confPass === pass;
        let isCompanyNumCorrect = companyNumPattern.test(companyNum);

        if(!isCorrectName){
            usernameElement.style.border = '';
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.border = 'none';
        }

        if(!isEmailCorrect){
            emailElement.style.border = '';
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.border = 'none';
        }

        if(!isPassCorrect || !isPassConfirmSameValue){
            passElement.style.border = '';
            confirmPassElement.style.border = '';
            passElement.style.borderColor = 'red';
            confirmPassElement.style.borderColor = 'red';
        } else {
            passElement.style.border = 'none';
            confirmPassElement.style.border = 'none';
        }

        // if(!isPassConfirmSameValue){
        //     confirmPassElement.style.border = '';
        //     confirmPassElement.style.borderColor = 'red';
        // } else {
        //     confirmPassElement.style.border = 'none';
        // }

        if(!isCompanyNumCorrect && checkBoxElement.checked){
            companyNumElement.style.border = '';
            companyNumElement.style.borderColor = 'red';
        } else {
            companyNumElement.style.border = 'none';
        }

        if(checkBoxElement.checked && isCorrectName && isEmailCorrect && isPassCorrect && isPassConfirmSameValue && isCompanyNumCorrect){
            resultDivElement.style.display = 'inline-block';
        } else if(!checkBoxElement.checked && isCorrectName && isEmailCorrect && isPassCorrect && isPassConfirmSameValue){
            resultDivElement.style.display = 'inline-block';
        } else {
            resultDivElement.style.display = 'none';
        }
    })
}