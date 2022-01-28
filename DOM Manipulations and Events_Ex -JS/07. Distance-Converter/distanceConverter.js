function attachEventsListeners() {
    let buttonElement = document.querySelector('input[type="button"]');
    buttonElement.addEventListener('click', () => {
        let[inputField, outputField] = document.querySelectorAll('input[type="text"]'); 
        let inputUnits = document.querySelector('#inputUnits');
        let outputUnits = document.querySelector('#outputUnits');
        let convert = Number(inputField.value);
        switch (inputUnits.value) {
            case 'km':
                convert *= 1000;
                break;
            case 'm':
                convert = convert;
                break;
            case 'cm':
                convert *= 0.01;
                break;
            case 'mm':
                convert *= 0.001;
                break;
            case 'mi':
                convert *= 1609.34;
                break;
            case 'yrd':
                convert *= 0.9144;
                break;
            case 'ft':
                convert *= 0.3048;
                break;
            case 'in':
                convert *= 0.0254;
                break;
        }
        switch (outputUnits.value) {
            case 'km':
                convert /= 1000;
                break;
            case 'm':
                convert = convert;
                break;
            case 'cm':
                convert /= 0.01;
                break;
            case 'mm':
                convert /= 0.001;
                break;
            case 'mi':
                convert /= 1609.34;
                break;
            case 'yrd':
                convert /= 0.9144;
                break;
            case 'ft':
                convert /= 0.3048;
                break;
            case 'in':
                convert /= 0.0254;
                break;
        }
        outputField.value = convert;
    });
}