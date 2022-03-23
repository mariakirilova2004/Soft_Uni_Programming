export const albumIsInvalid = (albumData) =>{
    const required = ['name', 'imgUrl', 'price', 'releaseDate', 'artist', 'genre', 'description'];
       return required.some(x => !albumData[x]);
   }