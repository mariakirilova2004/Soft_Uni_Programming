/*function spiral_matrix(x, y){
    let array = [];
    for (let index = 0; index < x; index++) {
        const element = [];
        for (let ind = 0; ind < y; ind++) {
            element.push(0);
        }
        array.push(element);
    }
    let it = 1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.includes(0)){
            let ind = 0;
            for (ind = element.indexOf(0); ind < array.length; ind++) {
                if(element[ind] == 0){
                    element[ind] = it;
                    it++;
                }
                else break;
            }
            let indexd = 0;
            let indd = 0;
            for (indexd = ind - 1; indexd < y; indexd) {
                let flag = false;
                if (indd == 5) break;
                for (indd = index + 1; indd < x; indd++) {
                    const element = array[indd][indexd];
                    if (element == 0){
                        array[indd][indexd] = it;
                        it++;
                    } else{
                       flag = true;
                        break;
                    }
                }
                if (flag) break;
            }
            let indb = 0;
            for (indb = indexd - 1; indb >= array[indd - 1].indexOf(0); indb--) {
                let element = array[indd - 1][indb];
                if (element == 0){
                    array[indd - 1][indb] = it;
                    it++;
                }
                else break;
            }
            let indexu = 0;
            for (indexu = indd - 2; indexu > 0; indexu--) {
                let flag = false;
                for (let indu = indb + 1; indu < array[indexu].length; indu) {
                    let element = array[indexu][indu];
                    if (element == 0){
                        array[indexu][indu] = it;
                        it++;
                    }
                    else{
                        break;
                    } 
                }
                if(flag) break;
            }
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element.join(' '));
    }
};

spiral_matrix(6, 6);
*/
function spiral_matrix(x, y) {
    const matrix = (n) => {
        const results = [];
      for (let i = 0; i < n; i++) {
          results.push([]);
        }
      let counter = 1;
        let startColumn = 0;
        let endColumn = n - 1;
        let startRow = 0;
        let endRow = n - 1;
        while (startColumn <= endColumn && startRow <= endRow) {
          // Top row
          for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
          }
          startRow++;
      // Right column
          for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
          }
          endColumn--;
      // Bottom row
          for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
          }
          endRow--;
      // start column
          for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
          }
          startColumn++;
        }
      return results;
      }

      let array = matrix(x);
      for (let index = 0; index < array.length; index++) {
          const element = array[index];
            console.log(element.join(' '));
      }

}

spiral_matrix(3, 3);