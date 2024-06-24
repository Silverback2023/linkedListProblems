class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Delete the N-th Node from the End
  function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
  
    // Move first n+1 steps ahead
    for (let i = 0; i <= n; i++) {
      first = first.next;
    }
  
    // Move first to the end, maintaining the gap
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    // Skip the desired node
    second.next = second.next.next;
  
    return dummy.next;
  }
  
  // Example usage for removeNthFromEnd:
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  let n = 2;
  
  let updatedList = removeNthFromEnd(head, n);
  
  // Function to print the list
  function printList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  console.log("Updated List after removing N-th node from the end:");
  printList(updatedList); // Output: 1 -> 2 -> 3 -> 5 -> null
  