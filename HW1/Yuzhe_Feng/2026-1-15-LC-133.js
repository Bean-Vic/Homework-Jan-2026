/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if (node === null) return null;
  const map = new Map();

  function dfs(cur) {
    if (map.has(cur)) return map.get(cur);
    const copy = new Node(cur.val);
    map.set(cur, copy);

    for (const nei of cur.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }

  return dfs(node);
};