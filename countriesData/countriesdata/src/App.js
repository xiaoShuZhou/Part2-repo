import react, { useEffect } from 'react';
import axios from 'axios';

import CountriesInfo from './components/CountriesInfo';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = react.useState([]);
  const [filter, setFilter] = react.useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log(filteredCountries);
  console.log(filteredCountries.length);

  return (
    <div>
      <Filter filter={filter} handleFilterChange = {handleFilterChange}  />
      <CountriesInfo filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;
