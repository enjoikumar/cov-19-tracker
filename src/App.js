import React, { useState } from 'react';
import './styles/App.css';
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([
    'USA',
    'UK',
    'India'
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>




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
