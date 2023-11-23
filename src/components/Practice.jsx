import React, { useState } from 'react';

const Practice = () => {
  const countries = [
    { id: 1, name: 'In' },
    { id: 2, name: 'Usa' },
    { id: 3, name: 'Sa' },
    { id: 4, name: 'Au' },
    { id: 5, name: 'Wi' },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCountries(selectAll ? [] : countries.map((country) => country.id));
    console.log(selectedCountries)
  };

  const handleCountryChange = (id) => {
    const updatedSelectedCountries = selectedCountries.includes(id)
      ? selectedCountries.filter((countryId) => countryId !== id)
      : [...selectedCountries, id];
    //   console.log(updatedSelectedCountries)

    setSelectedCountries(updatedSelectedCountries);
    setSelectAll(updatedSelectedCountries.length === countries.length);
  };

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        Select all
      </label>
      {countries.map((country) => (
        <div key={country.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={selectedCountries.includes(country.id)}
              onChange={() => handleCountryChange(country.id)}
            />
            {country.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Practice;
