var isValidBST = function(root) {
    let prevVal = -Infinity;

    function dfs(node) {
        if (node === null) {
            return true;
        }

        if (!dfs(node.left)) {
            return false;
        }

        if (node.val <= prevVal) {
            return false;
        }
        prevVal = node.val;

        if (!dfs(node.right)) {
            return false;
        }
        return true;
    }

    return dfs(root);
};
