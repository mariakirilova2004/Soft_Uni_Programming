function solve() {
    let from = document.getElementById('input');
    let toOption = document.querySelector('div #selectMenuTo');
    let rez = document.getElementById('result');
    let first = toOption.querySelector('option');
    first.value = "binary";
    first.textContent = "Binary";
    let second = toOption.appendChild(document.createElement('option'));
    second.value = "hexadecimal";
    second.textContent = "Hexadecimal";
    let button = document.querySelector('button').onclick = function() {
        let ans;
        let input = document.getElementById('input').value;
        let To = toOption.value;
        if (To === 'binary'){
            ans = convertToBinary(Number(input));
        } else{
            ans = decimalToHexString(Number(input));
        }
        rez.value = ans;
    };
    function convertToBinary(x) {
        let bin = 0;
        let rem, i = 1, step = 1;
        while (x != 0) {
            rem = x % 2;
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        return bin;
    };
    function decimalToHexString(number)
    {
      if (number < 0)
      {
        number = 0xFFFFFFFF + number + 1;
      }
    
      return number.toString(16).toUpperCase();
    }
}


