/*
 * Linked List Cycle Detection
 *
 * Problem:
 * Given head, the head of a linked list, determine if the linked list has a cycle.
 */

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};
