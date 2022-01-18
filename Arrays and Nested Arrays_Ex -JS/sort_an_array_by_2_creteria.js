function sort_an_array_by_2_creteria(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join('\n'));
}

sort_an_array_by_2_creteria(['test', 'Deny', 'omen', 'Default']);