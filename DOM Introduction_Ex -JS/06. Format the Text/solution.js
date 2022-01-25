function solve() {
  let textarea = document.getElementById('input').value;
  let div = document.getElementById('output');
  let sentences = Array.from(textarea.split('.').filter(x => x !== ''));
  let count = 1;
  let string = '';
  for (const sentence of sentences) {
    if (count > 3){
      let p = document.createElement('p');
      p.textContent = string;
      div.appendChild(p);
      string = '';
      count = 1;
    }
    string += sentence + '.';
    count++;
  }
  let p = document.createElement('p');
      p.textContent = string;
      div.appendChild(p);
}