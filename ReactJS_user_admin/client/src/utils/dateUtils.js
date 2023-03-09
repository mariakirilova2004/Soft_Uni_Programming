export const FormDate = (input) =>{
    const date = new Date(input);
    return date.toLocaleDateString();
  };