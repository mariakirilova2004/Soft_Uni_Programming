function solve(...list){
    let rez = {};
    for (const element of list) {
        let type = typeof(element);
        if (rez[type] == undefined) rez[type] = [];
        rez[type].push(element);
    }
    let keys = Object.keys(rez)
    for (const key of keys) {
        if(rez[key].length > 1){
            rez[key].forEach(element => {
                console.log(`${key}: ${element}`);
            });
        }
        else if(key != 'object') console.log(`${key}: ${rez[key]}`);
        else  console.log(`${key}:`);
    }
    keys = Object.keys(rez).sort(function(a,b){return rez[b].length-rez[a].length});
    for (const key of keys) {
        console.log(`${key} = ${rez[key].length}`);
    }
}

function result(){
    let data = {};
    Array.from(arguments).forEach((line) => {
        let type = typeof line;
        console.log(`${type}: ${line}`);
        if(!data[type]){
            data[type] = 0;
        }
        data[type]++;
    });
    Object.keys(data)
    .sort((a, b) => {return data[b] - data[a]})
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}

solve({ name: 'bob'}, 3.333, 9.999);


var expectedOutput = [
    'object:',
    'number: 3.333',
    'number: 9.999',
    'number = 2',
    'object = 1'
];

//solve('cat', 42, function () { console.log('Hello world!'); });