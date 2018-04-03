// ========== Linked Lists ==========

// ======== Node ========
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  let node = new Node(1);
  console.log(node);
  
  // ===== Linked List =====
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    add(data) {
      let node = new Node(data);
      if (!this.head) {
        this.head = node;
      }
      else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
    
    middleAdd(previous, data) {
      let node = new Node(data);
      current = this.head;
      while(current.next) {
        if (current.data === previous) {
          node.next = current.next;
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
  }
  
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(4);
  console.log(JSON.stringify(list, null, 2));
  list.middleAdd(2, 3);
  console.log(JSON.stringify(list, null, 2));
  