function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j-1]; j--){
            swap(array, j, j - 1);
        }
    }
    return array;
}

export function trie(tab) {
    let tmp;
    for (let i = 0; i < tab.length; i++) {
        for (let j = i; j < tab.length; j++) {
            if (tab[i] > tab[j]) {
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
        }
    }
    return tab;
}


export function sum(a, b) {
    return a + b;
}