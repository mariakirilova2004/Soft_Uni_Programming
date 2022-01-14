function last_k_numbers_sequence(n, k){
    let rez = [1];
    for (let index = 0; index < n - 1; index++) {
        let ch = 0;
        for (let index1 = 0; index1 < k; index1++) {
            if(index - index1 >= 0) ch += Number(rez[index - index1]);
        }
        rez.push(ch);
    }
    return rez;
}

last_k_numbers_sequence(8, 2);