## Same Tree

### Problem
Given the roots of two binary trees `p` and `q`, write a function to check
if they are the same or not.

---

```javascript
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
