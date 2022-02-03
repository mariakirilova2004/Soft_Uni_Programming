function solve(arr, start, end){
    if (!Array.isArray(arr)){
        return NaN;
    } else if (start < 0){
        start = 0;
    } else if (end >= arr.length){
        end = arr.length - 1;
    }
    let subNumbers = arr.slice(start, end + 1);
    let sum = subNumbers.reduce((a, b) => a + Number(b), 0);
    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));