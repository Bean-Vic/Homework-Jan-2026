var removeNthFromEnd = function(head, n) {
  let dummy = { next: head };
  let fast = dummy;
  let slow = dummy;

  // move fast pointer
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // delet node
  slow.next = slow.next.next;

  return dummy.next;
};