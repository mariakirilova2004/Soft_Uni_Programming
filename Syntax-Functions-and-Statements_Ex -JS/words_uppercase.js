function words_uppercase(str) {
    //const splitMultiple = (str, ...separator) => {
    //   const res = [];
    //    let start = 0;
    //    for(let i = 0; i < str.length; i++){
    //       if(!separator.includes(str[i])){
    //          continue;
    //       };
    //       res.push(str.substring(start, i));
    //       start = i+1;
    //    };
    //    return res;
    // };
    //let array = splitMultiple(str, ' ', ',', '!', '?', '.');
    // let array = str.split("[a-z]\\,\\s+");
    let array = str.split(/[=,|,_,~,`,:,^,&,#,$,%,*,-,>,+,<,@,/,\\,\[,\],},{,},;,),(,",',.,!,?, ,\,]/);
    array = array.filter(e =>  e);
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase();
    }
    let rez = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        rez += element + ', ';
    }
    rez = rez.trimEnd();
    rez = rez.slice(0, -1);
    console.log(rez);
}

words_uppercase('Functions in JS can be nested, i.e. hold other functions');