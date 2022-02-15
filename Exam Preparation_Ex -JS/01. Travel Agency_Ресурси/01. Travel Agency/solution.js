window.addEventListener('load', solution);

function solution() {
  let submitButtonElement = document.getElementById('submitBTN');
  let infoPreview = document.getElementById('infoPreview');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  let fnameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');
  let fnameLiElement = document.createElement('li');
  let emailLiElement = document.createElement('li');
  let phoneLiElement = document.createElement('li');
  let addressLiElement = document.createElement('li');
  let codeLiElement = document.createElement('li');
  submitButtonElement.addEventListener('click', () => {
    if (fnameElement.value.length > 0 && emailElement.value.length > 0){
      submitButtonElement.disabled = true;
      fnameLiElement.textContent = "Full Name: " + fnameElement.value;
      emailLiElement.textContent = "Email: " + emailElement.value;
      phoneLiElement.textContent = "Phone Number: " + phoneElement.value;
      addressLiElement.textContent = "Address: " + addressElement.value;
      codeLiElement.textContent = "Postal Code: " + codeElement.value;
      fnameElement.value = "";
      phoneElement.value = "";
      emailElement.value = "";
      addressElement.value = "";
      codeElement.value = "";
      infoPreview.appendChild(fnameLiElement);
      infoPreview.appendChild(emailLiElement);
      infoPreview.appendChild(phoneLiElement);
      infoPreview.appendChild(addressLiElement);
      infoPreview.appendChild(codeLiElement);
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  });
  editButton.addEventListener('click', () => {
    fnameElement.value = fnameLiElement.textContent.split(': ')[1];
    phoneElement.value = phoneLiElement.textContent.split(': ')[1];
    emailElement.value = emailLiElement.textContent.split(': ')[1];
    addressElement.value = addressLiElement.textContent.split(': ')[1];
    codeElement.value = codeLiElement.textContent.split(': ')[1];
    while (infoPreview.firstChild) {
      infoPreview.removeChild(infoPreview.lastChild);
    }
    submitButtonElement.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });
  continueButton.addEventListener('click', () => {
    let blockElement = document.getElementById('block');
    while (blockElement.firstChild) {
      blockElement.removeChild(blockElement.lastChild);
    }
    let h3Element = document.createElement('h3');
    h3Element.textContent = "Thank you for your reservation!";
    blockElement.appendChild(h3Element);
  });
}
