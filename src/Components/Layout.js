import { Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Unit from "./Unit";
import BFS from "./DataStructures/BFS";
import DFS from "./DataStructures/DFS";
import DialogPop from "./DialogPop";
import A_Star from "./DataStructures/A_Star";
import { equals } from "./DataStructures/CommonFunc";
import Stats from "./Stats";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

function Layout(props) {
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
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [block, setBlock] = useState([]);
  const [trav, setTrav] = useState([]);
  const [path, setPath] = useState([]);
  const [found, setFound] = useState(false);
  const [searchStat, setStat] = useState(allStat);

  const ResetAll = async () => {
    setStart(null);
    setEnd(null);
    setBlock([]);
    setTrav([]);
    setPath([]);
    setStat(allStat);
  };

  const PerformSearch = async () => {
    setTrav([]);
    setPath([]);
    if (props.algorithm === "BFS") {
      console.log("Performing BFS");
      BFS(start, end, block, props.gridShape).then(async ({ Trav, Path }) => {
        let i = 0;
        let j = 0;

        var intr = setInterval(() => {
          i++;
          setTrav(Trav.slice(0, i));
          if (i > Trav.length - 1) {
            clearInterval(intr);
            if (!equals(end, Trav[Trav.length - 1])) {
              console.log("Not found");
              setFound(true);
            } else {
              let temp = searchStat;
              temp["BFS"].trav = Trav.length - 1;
              temp["BFS"].path = Path.length;
              setStat(temp);
              var pathIntr = setInterval(() => {
                j++;
                setPath(Path.slice(0, i));
                if (j > Path.length - 1) {
                  clearInterval(pathIntr);
                }
              }, props.animTime);
            }
          }
        }, props.animTime);
      });
    } else if (props.algorithm === "DFS") {
      console.log("Performing DFS");
      DFS(start, end, block, props.gridShape).then(async ({ Trav, Path }) => {
        let i = 0;
        var intr = setInterval(() => {
          i++;
          setTrav(Trav.slice(0, i));
          if (i > Trav.length - 1) {
            clearInterval(intr);
            if (!equals(end, Trav[Trav.length - 1])) {
              console.log("Not found");
              setFound(true);
            } else {
              let temp = searchStat;
              temp["DFS"].trav = Trav.length - 1;
              temp["DFS"].path = Path.length;
              setStat(temp);
              var pathIntr = setInterval(() => {
                i++;
                setPath(Path.slice(0, i));
                if (i > Path.length - 1) {
                  clearInterval(pathIntr);
                }
              }, props.animTime);
            }
          }
        }, props.animTime);
      });
    } else if (props.algorithm === "A*") {
      console.log("Performing A*");
      A_Star(start, end, block, props.gridShape).then(
        async ({ Trav, Path }) => {
          let i = 0;
          var intr = setInterval(() => {
            i++;
            setTrav(Trav.slice(0, i));
            if (i > Trav.length - 1) {
              clearInterval(intr);
              if (!equals(end, Trav[Trav.length - 1])) {
                console.log("Not found");
                setFound(true);
              } else {
                let temp = searchStat;
                temp["A*"].trav = Trav.length - 1;
                temp["A*"].path = Path.length;
                setStat(temp);
                var pathIntr = setInterval(() => {
                  i++;
                  setPath(Path.slice(0, i));
                  if (i > Path.length - 1) {
                    clearInterval(pathIntr);
                  }
                }, props.animTime);
              }
            }
          }, props.animTime);
        }
      );
    }
  };

  const makeGrid = () => {
    let grid = [];
    let k = 1000;
    let row = [];

    for (let i = 1; i <= props.gridShape; i++) {
      for (let j = 1; j <= props.gridShape; j++) {
        grid.push(
          <Unit
            key={k}
            wall={
              i === 1 ||
              j === 1 ||
              i === props.gridShape ||
              j === props.gridShape
                ? true
                : false
            }
            setStart={setStart}
            setEnd={setEnd}
            setBlock={setBlock}
            start={start}
            end={end}
            block={block}
            gridType={props.gridType}
            trav={trav}
            position={[i, j]}
            path={path}
            setStat={setStat}
          />
        );
        k++;
      }
      row.push(
        <div
          key={i}
          style={{
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {grid}
        </div>
      );
      grid = [];
    }
    return row;
  };

  return (
    <div>
      <div>
        <DialogPop open={found} setOpen={setFound} />
      </div>

      <Grid container direction="row" justify="space-around">
        <div>
          <Button
            color="primary"
            style={{ backgroundColor: "salmon", marginBottom: 10 }}
            disabled={start === null || end === null ? true : false}
            onClick={() => PerformSearch()}
          >
            Start Search <PlayArrowIcon />
          </Button>
          <Button
            onClick={() => ResetAll()}
            style={{
              backgroundColor: "antiquewhite",
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Reset <RotateLeftIcon />
          </Button>
          {makeGrid()}
        </div>
        <div>
          <Paper elevation={5}>
            <Stats searchStat={searchStat} />
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default Layout;
