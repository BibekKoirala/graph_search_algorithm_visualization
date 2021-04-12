export const arrayContains = (main, sub) => {
  let i = main.length;
  for (let k = 0; k < i; k++) {
    if (main[k][0] === sub[0] && main[k][1] === sub[1]) {
      return true;
    }
  }
  return false;
};

export const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export const possiblePaths = (node, gridSize, block, trav) => {
  let possiblePath = [];

  if (node[0] > 2) {
    possiblePath.push([node[0] - 1, node[1]]);
  }
  if (node[0] < gridSize - 1) {
    possiblePath.push([node[0] + 1, node[1]]);
  }
  if (node[1] > 2) {
    possiblePath.push([node[0], node[1] - 1]);
  }
  if (node[1] < gridSize - 1) {
    possiblePath.push([node[0], node[1] + 1]);
  }
  possiblePath = possiblePath.filter((sub) => {
    return !arrayContains(block, sub);
  });
  possiblePath = possiblePath.filter((sub) => {
    return !arrayContains(trav, sub);
  });
  return possiblePath;
};
