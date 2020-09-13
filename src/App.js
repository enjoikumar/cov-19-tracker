import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { FormControl, Select, MenuItem, Card, CardContent, Typography } from "@material-ui/core";

import InfoBox from "./Components/InfoBox";
import Map from "./Components/Map";
import Table from "./Components/Table";
import Graph from "./Components/Graph";

// https://disease.sh/v3/covid-19/all
// https://disease.sh/v3/covid-19/countries/[COUNTY_CODE]

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);

        // all the data from the country
        setCountryInfo(data);
      })
  };

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then((data) => {
        setCountryInfo(data)
      })
  }, [])

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
      <div className="app__left">
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
          <InfoBox title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases} />

          <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}/>

          <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths}/>
        </div>

        <Map />
      </div>

      <Card className="app__right">
        <h3>Live Cases by Country</h3>
          <Table />
        <h3> Worldwide new cases</h3>
          <Graph />
      </Card>

    </div>
  );
}

export default App;
