function merge(array1, array2) {
    let merged = [];

    while (array1.length && array2.length) {
        let temp;
        if (array1[0] >= array2[0]) {
            temp = array2.shift();
            merged.push(temp);
        } else {
            temp = array1.shift();
            merged.push(temp);
        }
    }
    merged = merged.concat(array1).concat(array2);
    return merged;
}

function mergeSort(array) {

    if (array.length <= 1) return array;

    let half = Math.floor(array.length / 2);
    let leftArr = array.slice(0, half);
    let rightArr = array.slice(half);
    
    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};