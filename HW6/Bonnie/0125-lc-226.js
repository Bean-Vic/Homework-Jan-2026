/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function traverse(root) {

    if(!root){
        return null;
    };

    var temp = root.left;
    root.left = root.right;
    root.right = temp;

    traverse(root.left);
    traverse(root.right);


    
};

var invertTree = function(root) {
    traverse(root);
    return root;
}