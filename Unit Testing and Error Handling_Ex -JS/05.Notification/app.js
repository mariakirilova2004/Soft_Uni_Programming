function notify(message) {
  console.log('todo')
  let divElement = document.getElementById('notification');
  divElement.textContent = message;
  divElement.style.display = 'block';
  divElement.addEventListener('click', () => {
    divElement.style.display = 'none';
  });
}