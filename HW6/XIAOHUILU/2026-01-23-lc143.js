var reorderList = function(head) {
  if (!head || !head.next) return;

  // find mid point
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the last part
  let prev = null;
  let curr = slow.next;
  slow.next = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // merge two parts
  let first = head;
  let second = prev;

  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;

    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
};