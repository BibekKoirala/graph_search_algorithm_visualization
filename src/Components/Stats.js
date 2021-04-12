import { Button, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Stats({ searchStat }) {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: 50 }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Algorithm</TableCell>
              <TableCell align="right">Traversed Nodes</TableCell>
              <TableCell align="right">Path Length</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Breadth First Search
              </TableCell>
              <TableCell align="right">{searchStat["BFS"].trav}</TableCell>
              <TableCell align="right">{searchStat["BFS"].path}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Depth First Search
              </TableCell>
              <TableCell align="right">{searchStat["DFS"].trav}</TableCell>
              <TableCell align="right">{searchStat["DFS"].path}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                A Star
              </TableCell>
              <TableCell align="right">{searchStat["A*"].trav}</TableCell>
              <TableCell align="right">{searchStat["A*"].path}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Stats;
