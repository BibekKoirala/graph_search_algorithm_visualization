import React from "react";
import {
  Grid,
  Paper,
  Select,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Slider
} from "@material-ui/core";

function Options(props) {
  return (
    <Paper
      style={{ margin: 10, backgroundColor: "aliceblue" }}
      variant="outlined"
      elevation={5}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "10px", fontWeight: "bold`" }}
      >
        Options
      </Typography>

      {/* <h2>Graph Search Algorithm Visualization Instructions</h2> */}
      

      <Grid
        container
        style={{ padding: 20 }}
        alignItems="center"
        justify="space-around"
      >
        <FormControl style={{ minWidth: 120 }}>
          <InputLabel id="algo-select-id">Algorithm</InputLabel>
          <Select
            labelId="algo-select-id"
            value={props.algorithm}
            id="algo-select"
            onChange={(e) => props.setAlgorithm(e.target.value)}
          >
            {props.algorithms.map((algo, index) => {
              return (
                <MenuItem key={index} value={algo}>
                  {" "}
                  {algo}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 120 }}>
          <InputLabel id="gridtype-select-id">GridType</InputLabel>
          <Select
            value={props.gridType}
            labelId="gridtype-select-id"
            id="gridtype-select"
            onChange={(e) => props.setGridType(e.target.value)}
          >
            {props.gridTypes.map((algo, index) => {
              return (
                <MenuItem key={index} value={algo}>
                  {" "}
                  {algo}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 120 }}>
        <InputLabel id="anim-slider-label">Animation Time ( {props.animTime} ms)</InputLabel>
        <Slider
          value={props.animTime}
          onChange={(e, newValue)=> props.setAnim(newValue)}
          aria-labelledby="anim-slider-label"
          valueLabelDisplay="auto"
          step={50} // Adjust as needed
          marks // Display marks on the slider
          min={0} // Adjust minimum value
          max={500} // Adjust maximum value
        />
      
      </FormControl>

        <FormControl style={{ minWidth: 120 }}>
          <InputLabel id="gridsize-select-id">GridSize</InputLabel>
          <Select
            value={props.gridShape}
            onChange={(e) => props.setGrid(e.target.value)}
            inputProps={{
              name: "gridsize",
              id: "grid-select",
            }}
          >
            {props.gridShapes.map((algo, index) => {
              return (
                <MenuItem key={index} value={algo}>
                  {" "}
                  {algo}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Paper>
  );
}

export default Options;
