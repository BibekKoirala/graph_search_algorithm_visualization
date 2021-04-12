import { Queue, ListNode } from "./Queue";
import { equals, possiblePaths } from "./CommonFunc";

async function BFS(start, stop, block, gridSize) {
  if (equals(start, stop)) {
    return true;
  } else {
    let Start = new ListNode(start);
    let queue = new Queue(Start);

    let head = [];
    let trav = [];
    let travNode = [];

    while (!equals(head.data, stop) || queue.isEmpty()) {
      try {
        head = queue.dequeue();
      } catch {
        break;
      }

      trav.push(head.data);
      travNode.push(head);

      possiblePaths(head.data, gridSize, block, trav).forEach((path) => {
        if (!queue.contains(path)) {
          queue.enqueue(new ListNode(path, head));
        }
      });
    }

    let path = [];
    let lastNode = travNode[travNode.length - 1];
    while (lastNode.prev !== null) {
      path.push(lastNode.prev.data);
      lastNode = lastNode.prev;
    }
    return { Trav: trav, Path: path };
  }
}

export default BFS;
