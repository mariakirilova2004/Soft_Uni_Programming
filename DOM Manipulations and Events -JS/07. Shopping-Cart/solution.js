function solve() {
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   let products = {};
   let rez = '';
   let poductElements = Array.from(document.querySelectorAll('.product .add-product'));
   poductElements.forEach(x => x.addEventListener('click', (e) => {
      rez = '';
      let parent1 = e.currentTarget.parentNode.parentNode;
      let name = parent1.querySelector('div.product-details div.product-title').textContent;
      let price = parent1.querySelector('.product-line-price').textContent;
      if (!(name in products))
      {
         products[name] = [Number(price),1];
      } else{
         products[name][1]++;
      }     
      rez += `Added ${name} for ${price} to the cart.\n`;
      textAreaElement.disabled = false;
      textAreaElement.value += rez;
   }));
   let buttonCheckElement = document.getElementsByClassName('checkout')[0];
   buttonCheckElement.addEventListener('click', (e) =>{
      let names = [];
      for (const key in products) {
         names.push(key); 
      }
      let sum = 0;
      for (const key in products) {
         if (Object.hasOwnProperty.call(products, key)) {
            const element = products[key][0] * products[key][1];
            sum += element; 
         }
      }
      let final = `You bought ${names.join(', ')} for ${sum.toFixed(2)}.`;
      textAreaElement.disabled = false;
      textAreaElement.value += final;
      e.currentTarget.disabled = true;
      poductElements.forEach(x => x.disabled = true);
   });
}