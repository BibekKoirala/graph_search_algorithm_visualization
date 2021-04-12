import { equals } from "./CommonFunc";

class Node {
  constructor(data, priority, prev = null) {
    this.data = data;
    this.priority = priority;
    this.next = null;
    this.prev = prev;
  }
}

class PriorityQueue {
  constructor(head = null) {
    this.head = head;
  }

  enqueue(node) {
    if (this.head === null) {
      this.head = node;
    } else if (this.head.next === null) {
      if (this.head.priority < node.priority) {
        this.head.next = node;
      } else {
        let temp = this.head;
        this.head = node;
        this.head.next = temp;
      }
    } else if (this.head.priority > node.priority) {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    } else {
      let trav = this.head;

      while (true) {
        if (trav.next === null) {
          if (trav.priority < node.priority) {
            trav.next = node;
            break;
          } else {
            let temp = trav;
            trav = node;
            trav.next = temp;
            break;
          }
        } else if (trav.next.priority > node.priority) {
          let temp = trav.next;
          trav.next = node;
          trav.next.next = temp;
          break;
        }
        trav = trav.next;
      }
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
}

const _Node = Node;
export { _Node as Node };

const _PriorityQueue = PriorityQueue;
export { _PriorityQueue as PQueue };
