// LC141 link list cycle

var hasCycle = function (head){
    if (head === null) {
        return false;
    }
    let set = new Set();
    while (head.next != null) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
    }
    return false;
}


