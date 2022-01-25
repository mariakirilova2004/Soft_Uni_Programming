function solve() {
  let text = document.getElementById('text').value;
  let string = text.split(' ');
  let textp = document.getElementById('naming-convention').value;
  let rezult = document.getElementById('result');
  let rez = '';
  if (textp == "Camel Case"){
    rez += string[0].toLowerCase();
    for (let index = 1; index < string.length; index++) {
      let element = string[index].toLowerCase();
      let act = element[0];
      act = act.toUpperCase();
      element = act + element.substring(1, element.length);
      rez += element;
    }
  } else if (textp == "Pascal Case"){
    for (let index = 0; index < string.length; index++) {
      let element = string[index].toLowerCase();
      let act = element[0];
      act = act.toUpperCase();
      element = act + element.substring(1, element.length);
      rez += element;
    }
  } else{
    rez = "Error!";
  }
  rezult.textContent = rez;
}