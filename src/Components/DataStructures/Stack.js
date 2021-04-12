import { equals } from "./CommonFunc";

class Stack {
  constructor(head = null) {
    this.head = head;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let trav = this.head;
      while (trav.next !== null) {
        trav = trav.next;
      }
      trav.next = node;
    }
  }

  pop() {
    let item = null;
    if (this.head === null) {
      throw new Error("No item in stack to pop");
    } else if (this.head.next === null) {
      item = this.head;
      this.head = null;
    } else {
      let trav = this.head;
      while (trav.next.next !== null) {
        trav = trav.next;
      }
      item = trav.next;
      trav.next = null;
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
}

const _Stack = Stack;
export { _Stack as Stack };
