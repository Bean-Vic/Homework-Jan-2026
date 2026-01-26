// 133.Clone Graph
// bfs solution, use hashmap to store the mapping from original node to clone node
// using queue to traverse the graph


 // Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 }
 


var cloneGraph = function(node) {
    if (node === null) {return null;}
    //create hashmap
    const hm = new Map();
    const queue = [];
    //we put first node as the starting level
    queue.push(node);
    // we put the first node in the hm as starting node
    hm.set(node, new Node(node.val));
    while(queue.length > 0) {
        const cur = queue.shift();
        for (const nei of cur.neighbors) {
            if (!hm.has(nei)){
                hm.set(nei, new Node(nei.val));
                queue.push(nei);
            }
            hm.get(cur).neighbors.push(nei);
        }
    }
    return hm.get(node);
}
