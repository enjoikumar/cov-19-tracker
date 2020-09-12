import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

import InfoBox from "./Components/InfoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, //usa, uk, fr,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div class="app__stats">
        <InfoBox title="Coronavirus Cases" total={2000} cases={123} />

        <InfoBox title="Recovered" total={3000} cases={124}/>

        <InfoBox title="Deaths" total={4000} cases={125}/>
      </div>

      {/* Table*/}
      {/* Graph*/}
      {/* map*/}
    </div>
  );
}

export default App;
