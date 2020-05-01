function numRegions(graph) {
  let visited = new Set();
  let count = 0;
    
  for (let key in graph) {
    let value = bfs(key, graph, visited);      
    
    if (value) count++;
  }   

  return count;
}

function bfs(node, graph, visited) {
  if (visited.has(node)) return false;

  let queue = [node];

  while (queue.length) {
    let shiftedEle = queue.shift();
    
    if (visited.has(shiftedEle)) continue;
    visited.add(shiftedEle);
    
    queue.push(...graph[shiftedEle]);
  }
  
  return true;
}

function dfs(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);    
    
  graph[node].forEach((neighbor) => {
    dfs(neighbor, graph, visited);
  })
    
  return true;
}

module.exports = {
  numRegions
};
