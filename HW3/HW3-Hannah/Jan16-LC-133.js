/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node === null) return null;

  const map = new Map(); 
  const queue = [node];

  map.set(node, new Node(node.val, []));

  while (queue.length > 0) {
    const cur = queue.shift();
    const curClone = map.get(cur);

    for (const nei of cur.neighbors) {
      if (!map.has(nei)) {
        map.set(nei, new Node(nei.val, []));
        queue.push(nei);
      }
      
      curClone.neighbors.push(map.get(nei));
    }
  }

  return map.get(node);
};