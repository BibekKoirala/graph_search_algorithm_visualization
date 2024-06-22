import React, { useState } from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Options from "./Options";
import Instructions from './Instructions';


function Root() {
  const algorithms = ["BFS", "DFS", "A*"];
  const gridShapes = ["20X20", "30X30", "40X40"];
  const gridTypes = ["None", "Start", "Stop", "Block"];
  const animTimes = 500;

  const [algorithm, setAlgorithm] = useState(null);
  const [gridType, setGridType] = useState(null);
  const [gridShape, setGrid] = useState("20X20");
  const [animTime, setAnim] = useState(100);

  const [instructionsOpen, setInstructionsOpen] = useState(true);

  const handleOpenInstructions = () => {
    setInstructionsOpen(true);
  };

  const handleCloseInstructions = () => {
    setInstructionsOpen(false);
  };

  return (
    <div>
      <Navbar handleOpenInstructions={handleOpenInstructions}/>
      <Options
        algorithms={algorithms}
        gridShapes={gridShapes}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        gridShape={gridShape}
        gridTypes={gridTypes}
        gridType={gridType}
        animTimes={animTimes}
        animTime={animTime}
        setAnim={setAnim}
        setGridType={setGridType}
        setGrid={setGrid}
      />

      <Layout
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        gridType={gridType}
        animTime={animTime}
        gridShape={
          gridShape.includes("20")
            ? 20
            : gridShape.includes("30")
            ? 30
            : gridShape.includes("40")
            ? 40
            : "None"
        }
      />
      <Instructions open={instructionsOpen} handleClose={handleCloseInstructions} />
    </div>
  );
}

export default Root;
