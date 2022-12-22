import React from "react";

const CountriesInfo = ({ filteredCountries }) => {
    if (filteredCountries.length === 0) {
        return <div>There are no countries to show.</div>;
    }
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter.</div>;
    }
    if (filteredCountries.length === 1) {
        console.log(filteredCountries[0].languages);
        return (
        <div> 
            <p>{filteredCountries.name}</p>
            <p>Capital: {filteredCountries[0].capital}</p>
            <p>Area: {filteredCountries[0].area}</p>
            <p>Population: {filteredCountries[0].population}</p>
            <h2>Languages </h2>
            <ul>
                {Object.entries(filteredCountries[0].languages).map(
                ([key, value]) => (
                    <li key={key}>{value}</li>
                )
                )}
            </ul>

            <img src={filteredCountries[0].flags.png} alt="flag" width="100" />
        </div>
        );
    }

    if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        const handleShowClick = (event) => {
        console.log("click to show the view!");
        };
        

    return (
        <div>
        <h1>Country Data</h1>
        <ul>
            {filteredCountries.map((country) => (
            <li key={country.name.common}>
                {country.name.common}
                <button onClick={handleShowClick}>show</button>
            </li>
            ))}
        </ul>
        </div>
    );
}
    };

export default CountriesInfo;