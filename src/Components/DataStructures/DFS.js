import { ListNode } from "./Queue";
import { Stack } from "./Stack";
import { equals, possiblePaths } from "./CommonFunc";

async function DFS(start, stop, block, gridSize) {
  if (equals(start, stop)) {
    return true;
  } else {
    let Start = new ListNode(start);
    let stack = new Stack(Start);

    let top = [];
    let trav = [];
    let travNode = [];

    while (!equals(top.data, stop) || stack.isEmpty()) {
      try {
        top = stack.pop();
      } catch {
        break;
      }
      trav.push(top.data);
      travNode.push(top);

      possiblePaths(top.data, gridSize, block, trav).forEach((path) => {
        if (!stack.contains(path)) {
          stack.push(new ListNode(path, top));
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

export default DFS;
