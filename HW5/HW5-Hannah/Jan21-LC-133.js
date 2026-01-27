var cloneGraph = function(node) {
    const map = new Map();

    function dfs(curr) {
        if (!curr) return null;
        if (map.has(curr)) return map.get(curr);

        const clone = new Node(curr.val);
        map.set(curr, clone);

        for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }

    return dfs(node);
};
