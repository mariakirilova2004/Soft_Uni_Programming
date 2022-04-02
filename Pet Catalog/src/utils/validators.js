export const postcardIsInvalid = (postcardData) =>{
    const required = ['name', 'breed', 'age', 'weight', 'image'];
       return required.some(x => !postcardData[x]);
   }