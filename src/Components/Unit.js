import React from "react";
import { equals, arrayContains } from "./DataStructures/CommonFunc";

function Unit(props) {
  const {
    wall,
    setStart,
    setEnd,
    setBlock,
    start,
    end,
    block,
    gridType,
    trav,
    position,
    path,
    setStat,
  } = props;

  const allStat = {
    BFS: {
      trav: 0,
      path: 0,
    },
    DFS: {
      trav: 0,
      path: 0,
    },
    "A*": {
      trav: 0,
      path: 0,
    },
  };

  return (
    <span
      onClick={
        !props.wall
          ? () => {
              setStat(allStat);
              if (gridType === "Block") {
                if (arrayContains(block, props.position)) {
                  setBlock(
                    block.filter((blk) => {
                      return !equals(blk, position);
                    })
                  );
                } else if (equals(start, props.position)) {
                  alert("Hey its start node already");
                } else if (equals(end, props.position)) {
                  alert("Hey its end node already");
                } else {
                  setBlock([...block, position]);
                }
              } else if (gridType === "Start") {
                if (arrayContains(block, props.position)) {
                  alert("Hey its start node already");
                } else if (equals(end, props.position)) {
                  alert("Hey its end node already");
                } else {
                  setStart(position);
                }
              } else if (gridType === "Stop") {
                if (arrayContains(block, props.position)) {
                  alert("Hey its start node already");
                } else if (equals(start, props.position)) {
                  alert("Hey its start node already");
                } else {
                  setEnd(position);
                }
              } else {
              }
              // console.log(position)
            }
          : null
      }
      style={{
        position: "relative",
        color: "gray",

        backgroundColor: wall
          ? "blanchedalmond"
          : arrayContains(block, position)
          ? "green"
          : start && start[0] === position[0] && start[1] === position[1]
          ? "red"
          : end && end[0] === position[0] && end[1] === position[1]
          ? "orange"
          : arrayContains(path, position)
          ? "black"
          : arrayContains(trav, position)
          ? "purple"
          : "turquoise",

        paddingRight: 10,
        border: "solid",
        borderColor: "black",
        boxSizing: "border-box",
        borderWidth: 1,
      }}
      color="gray"
    ></span>
  );
}

export default Unit;
