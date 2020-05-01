// function maxValue(node) {
//     let visited = new Set();
//     let max = node.val;
//     let queue = [node];

//     while (queue.length) {
//         let shiftedNode = queue.shift();
//         if (visited.has(shiftedNode.val)) continue;
//         visited.add(shiftedNode.val);
//         if (max < shiftedNode.val) {
//             max = shiftedNode.val;
//         }
//         queue.push(...shiftedNode.neighbors);
//     }
//     return max;
// }

function maxValue(node, visited=new Set()) {
    if (visited.has(node.val)) return -Infinity;

    visited.add(node.val);
    let maxArr = [];

    node.neighbors.forEach((neighbor) => {
        maxArr = maxArr.concat(maxValue(neighbor, visited)); 
    });

    return Math.max(node.val,...maxArr);
}

module.exports = {
    maxValue
};