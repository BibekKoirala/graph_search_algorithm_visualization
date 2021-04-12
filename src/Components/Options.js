import React from "react";
import {
  Grid,
  Paper,
  Select,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
} from "@material-ui/core";

function Options(props) {
  return (
    <Paper
      style={{ margin: 10, backgroundColor: "aliceblue" }}
      variant="outlined"
      elevation={5}
    >
      <Typography
        variant="h6"
        style={{ textAlign: "center", margin: "10px", fontWeight: "bold`" }}
      >
        OPTIONS
      </Typography>
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
          <InputLabel id="anim-select-id">Animation Time (ms)</InputLabel>
          <Select
            value={props.animTime}
            labelId="anim-select-id"
            id="anim-select"
            onChange={(e) => props.setAnim(e.target.value)}
          >
            {props.animTimes.map((algo, index) => {
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
