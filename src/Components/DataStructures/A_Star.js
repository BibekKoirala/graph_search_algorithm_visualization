import { Node, PQueue } from "./PriorityQueue";

import { equals, possiblePaths } from "./CommonFunc";

function distance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

async function A_Star(start, stop, block, gridSize) {
  if (equals(start, stop)) {
    return true;
  } else {
    let Start = new Node(start, distance(start, stop));
    let queue = new PQueue(Start);

    let head = [];
    let trav = [];
    let travNode = [];

    let temp = true;
    while (!equals(head.data, stop) || queue.isEmpty()) {
      if (temp) {
        head = queue.dequeue();
        temp = false;
      }
      possiblePaths(head.data, gridSize, block, trav).forEach((path) => {
        if (!queue.contains(path)) {
          let newNode = new Node(path, distance(path, stop), head);
          queue.enqueue(newNode);
          trav.push(path);
          travNode.push(newNode);
        }
      });

      try {
        head = queue.dequeue();
      } catch {
        break;
      }
    }

    let path = [];
    let lastNode = travNode[travNode.length - 1];
    console.log(lastNode);
    while (lastNode.prev !== null) {
      console.log(lastNode.prev);
      path.push(lastNode.prev.data);
      lastNode = lastNode.prev;
    }
    return { Trav: trav, Path: path };
  }
}

export default A_Star;
