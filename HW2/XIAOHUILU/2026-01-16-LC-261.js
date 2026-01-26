//leetcode 261.graph valid tree
// the question only gave us the number of the node and their edges
// so we need to create a adjacent list to build the graph. 
var validTree = function (n, edges) {
    if (edges.lenght !== n-1) {
        return false;
    }

    const adjlist = new Map();
    for (let i = 0; i < n ; i++) {
        adjlist.set(i, []);
    }
    for (const [u, v] of edges) {
        adjlist.get(u).push(v);
        adjlist.get(v).push(u);
    }
    const visited = new Set();
    //dfs function

    const dfs = (node) => {
        if (visited.has(node)) {
            return;
        }
        visited.add(node);
        for (const nei of adjlist.get(node)) {
            dfs(nei);
        }
    };
    dfs(0);

    return visited.size === n;
};
