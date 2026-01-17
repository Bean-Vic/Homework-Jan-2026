/*
 * Reverse linked list
 *
 * Problem:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

var reverse_LinkedList = function(head) {
    let pre = null, cur = head;
    while (cur) {
        const tmp = cur.next;
        cur.next = pre; 
        pre = cur;
        cur = tmp;
    }
    return pre;
};

