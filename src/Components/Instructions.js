import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core';

const Instructions = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
      <DialogTitle >Instructions for Using the Graph Search Algorithms Visualization</DialogTitle>
      <DialogContent>
          <h4>1. Select the Algorithm</h4>
          <div>
            Use the dropdown menu labeled "Algorithm" to choose the search algorithm you want to visualize. The available options are:
            <ul>
              <li><strong>Breadth First Search (BFS)</strong></li>
              <li><strong>Depth First Search (DFS)</strong></li>
              <li><strong>A Star (A*)</strong></li>
            </ul>
          </div>
          <h4>2. Set the Grid Type</h4>
          <div>
            Choose the type of grid you want to use from the "GridType" dropdown. The options are:
            <ul>
              <li><strong>Start</strong>: This sets the start grid for search.</li>
              <li><strong>Stop</strong>: This sets the stop grid for search.</li>
              <li><strong>Block (Optional)</strong>: This sets the grid that is to be ignored during search.</li>

            </ul>
          </div>
          <h4>3. Adjust Animation Speed (Optional)</h4>
          <div>
            Use the slider labeled "Animation Time (ms)" to set the speed of the animation. The value is in milliseconds.
          </div>
          <h4>4. Configure Grid Size (Optional)</h4>
          <div>
            Select the size of the grid from the "GridSize" dropdown. The available size is:
            <ul>
              <li><strong>20x20</strong></li>
            </ul>
          </div>
          <h4>5. Start the Search</h4>
          <div>
            Press the "START SEARCH" button to begin the visualization of the selected algorithm on the grid.
          </div>
          <h4>6. Reset the Grid</h4>
          <div>
            If you want to reset the grid and start over, press the "RESET" button.
          </div>
          <h4>7. View Results</h4>
          <div>
            After the search is completed, the results will be displayed in the table on the right, showing the following details for each algorithm:
            <ul>
              <li><strong>Traversed Nodes</strong>: The number of nodes that were visited during the search.</li>
              <li><strong>Path Length</strong>: The length of the path found by the algorithm.</li>
            </ul>
          </div>
          <h4>Additional Tips</h4>
          <div>
            <ul>
              <li>Ensure that you have selected an algorithm and configured the settings before starting the search.</li>
              <li>Use the reset button if the grid or results need to be cleared before a new search.</li>
            </ul>
          </div>
      </DialogContent>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </Dialog>
  );
};

export default Instructions;
