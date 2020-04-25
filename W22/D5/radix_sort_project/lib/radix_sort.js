function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    if (arr.length === 1) return arr;

    let largestNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (largestNum < arr[i]) largestNum = arr[i];
    }
    
    let times = Math.abs(largestNum).toString().split("").length;

    const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

    for (let i = 0; i < times; i++) {
        let buckets = Array.from(Array(10), () => []);

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigitFrom(arr[j], i);
            
            buckets[digit].push(arr[j]);
        }
        
        arr = [].concat(...buckets);
    }

    return arr;
}


module.exports = {
    radixSort
};
