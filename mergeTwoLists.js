class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Merge Two Sorted Linked Lists
  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (l1 !== null) {
      current.next = l1;
    } else {
      current.next = l2;
    }
  
    return dummy.next;
  }
  
  // Example usage for mergeTwoLists:
  let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
  let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
  
  let mergedList = mergeTwoLists(l1, l2);
  
  // Function to print the list
  function printList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  console.log("Merged List:");
  printList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
  