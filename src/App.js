import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, //United States, United Kingdom
              value: country.countryInfo.iso2 //usa, uk, fr,
            }
          ))
          setCountries(countries)
        })
    }
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
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
