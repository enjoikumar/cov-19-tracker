import React from 'react';
import './App.css';
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">option 1</MenuItem>
          <MenuItem value="worldwide">option 2</MenuItem>
          <MenuItem value="worldwide">option 3</MenuItem>
          <MenuItem value="worldwide">option 4</MenuItem>
        </Select>
      </FormControl>

      <h1>this is app</h1>

      {/* Header */}
      {/* Title + select input dropdown field*/}
      {/* InfoBox */}
      {/* Table*/}
      {/* Graph*/}
      {/* map*/}


    </div>
  );
}

export default App;
