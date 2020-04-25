function countingSort(arr, max) {
    if (arr.length === 1) return arr;

    let sorter = Array.from(Array(max + 1), () => []);

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sorter[currentNum].push(currentNum);
    }

    return [].concat(...sorter);
}


module.exports = {
    countingSort
};