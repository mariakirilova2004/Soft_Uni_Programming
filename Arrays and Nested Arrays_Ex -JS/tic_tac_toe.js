function tic_tac_toe(array) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let turn = 'X';
    let flag = false;
    for (let index = 0; index < array.length; index++) {
        const element1 = Number(array[index][0]);
        const element2 = Number(array[index][2]);
        if (dashboard[element1][element2] != false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        let flag = false;
        dashboard[element1][element2] = turn;
        for (let col = 0; col < 3; col++) {
            const element = dashboard[col];
            if (element[0] == element[1] && element[1] == element[2] && element[1] != false){
                console.log(`Player ${element[1]} wins!`);
                flag = true;
                break;
            }
            if (dashboard[0][col] == dashboard[1][col] && dashboard[1][col] == dashboard[2][col] && dashboard[1][col] != false){
                console.log(`Player ${dashboard[1][col]} wins!`);
                flag = true;
                break;
            }
        }
        if (flag) break;
        let flag2 = true;
        for (let Col = 0; Col < dashboard.length; Col++) {
            const element = dashboard[Col];
            for (let Row = 0; Row < element.length; Row++) {
                const element1 = element[Row];
                if (element1 == false){
                    flag2 = false;
                    break;
                }
            }
            if(flag2 == false) break;
        }
        if (flag2){
            console.log(`The game ended! Nobody wins :(`)
            break;  
        } 
        if(dashboard[0][0] == dashboard[1][1] && dashboard[2][2] == dashboard[1][1] && dashboard[1][1] != false){
            console.log(`Player ${dashboard[1][1]} wins!`);
            break;
        }
        if(dashboard[0][2] == dashboard[1][1] && dashboard[2][0] == dashboard[1][1] && dashboard[1][1] != false){
            console.log(`Player ${dashboard[1][1]} wins!`);
            break;
        }
        if (turn == 'O') turn = 'X';
        else turn = 'O';
    }
    console.log(`${dashboard[0][0]}\t${dashboard[0][1]}\t${dashboard[0][2]}`);
    console.log(`${dashboard[1][0]}\t${dashboard[1][1]}\t${dashboard[1][2]}`);
    console.log(`${dashboard[2][0]}\t${dashboard[2][1]}\t${dashboard[2][2]}`)
}

tic_tac_toe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);