function solve(commands){
    let rez = [];
    let obj = {
        add: (string) => {
            rez.push(string);
        },
        remove: (string) => {
            let ind = rez.indexOf(string);
            while (ind != -1){
                rez.splice(ind, 1);
                ind = rez.indexOf(string);
            }
        },
        print: () => {
            console.log(rez.join(','));
        }
    }
    for (const command of commands) {
        let [func, string] = command.split(' ');
        obj[func](string);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);