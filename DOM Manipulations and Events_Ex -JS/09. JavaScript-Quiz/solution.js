function solve() {
  let rightAnswers = 0;
  let sectionElements = document.querySelectorAll('section');
  let h1Element = document.querySelector('ul#results li h1');
  for (const section of sectionElements) {
    let questionText = section.querySelector('ul li div h2').textContent;
    let fisrtAnsElement = section.querySelector('ul li:nth-child(2) div');
    let secondAnsElement = section.querySelector('ul li:nth-child(3) div');
    switch (questionText) {
      case "Question #1: Which event occurs when the user clicks on an HTML element?":
        fisrtAnsElement.addEventListener('click', () => {
          rightAnswers++;
          section.style.display = 'none';
          sectionElements[1].style.display = 'block';
        });
        secondAnsElement.addEventListener('click', () => {
          section.style.display = 'none';
          sectionElements[1].style.display = 'block';
        });
        break;
      case "Question #2: Which function converting JSON to string?":
        secondAnsElement.addEventListener('click', () => {
          rightAnswers++;
          section.style.display = 'none';
          sectionElements[2].style.display = 'block';
        });
        fisrtAnsElement.addEventListener('click', () => {
          section.style.display = 'none';
          sectionElements[2].style.display = 'block';
        });
        break;

      case "Question #3: What is DOM?":
        fisrtAnsElement.addEventListener('click', () => {
          rightAnswers++;
          section.style.display = 'none';
          if (rightAnswers == 3){
            h1Element.textContent = 'You are recognized as top JavaScript fan!';
          } else{
            h1Element.textContent = `You have ${rightAnswers} right answers`;
          }  
          h1Element.parentElement.parentElement.style.display = 'block';
        });
        secondAnsElement.addEventListener('click', () => {
          section.style.display = 'none';
          if (rightAnswers == 3){
            h1Element.textContent = 'You are recognized as top JavaScript fan!';
          } else{
            h1Element.textContent = `You have ${rightAnswers} right answers`;
          }  
          h1Element.parentElement.parentElement.style.display = 'block';
        });
        break;
    }
  }
}
