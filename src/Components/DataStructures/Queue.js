import { equals } from "./CommonFunc";

class ListNode {
  constructor(data, prev = null) {
    this.data = data;
    this.next = null;
    this.prev = prev;
  }
}

class Queue {
  constructor(head = null) {
    this.head = head;
  }

  enqueue(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    let item = null;
    if (this.head !== null) {
      item = this.head;
      this.head = this.head.next;
    } else {
      const error = new Error("No Element To Perform This Operation");
      throw error;
    }
    return item;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  contains(path) {
    let trav = this.head;
    while (trav !== null) {
      if (equals(trav.data, path)) {
        return true;
      }
      trav = trav.next;
    }
    return false;
  }

  printQueue() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const _Queue = Queue;
export { _Queue as Queue };

const _ListNode = ListNode;
export { _ListNode as ListNode };
