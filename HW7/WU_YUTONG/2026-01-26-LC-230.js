var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (node === null || result !== null) {
            return;
        }

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
};
