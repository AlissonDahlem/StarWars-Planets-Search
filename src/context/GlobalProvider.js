import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestApi from '../helpers/requestApi';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsRecover, setPlanetsRecover] = useState([]);
  const [columnFilter, setcolumnFilter] = useState('population');
  const [comparisonFilter, setcomparisonFilter] = useState('maior que');
  const [numberFilter, setnumberFilter] = useState(0);
  const [optionsColumnFilter, setOptionsColumnFilter] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  useEffect(() => {
    async function getData() {
      setPlanets(await requestApi());
      setPlanetsRecover(await requestApi());
    }
    getData();
  }, []);

  function filterPlanets(value) {
    setPlanets(planetsRecover.filter(({ name }) => name.toLowerCase().includes(value)));
  }

  function removeOptionAfterFilter() {
    optionsColumnFilter.forEach((optionFilter, index) => {
      if (optionFilter === columnFilter) {
        const newArray = optionsColumnFilter;
        newArray.splice(index, 1);
        setcolumnFilter(newArray[0]);
        return setOptionsColumnFilter(newArray);
      }
    });
  }

  function applyFilters() {
    if (comparisonFilter === 'maior que') {
      removeOptionAfterFilter();
      return setPlanets(planets.filter((element) => (
        parseFloat(element[columnFilter]) > parseFloat(numberFilter))));
    } if (comparisonFilter === 'menor que') {
      removeOptionAfterFilter();
      return setPlanets(planets.filter((element) => (
        parseFloat(element[columnFilter]) < parseFloat(numberFilter))));
    } if (comparisonFilter === 'igual a') {
      removeOptionAfterFilter();
      return setPlanets(planets.filter((element) => (
        parseFloat(element[columnFilter]) === parseFloat(numberFilter))));
    }
  }

  const contextValue = {
    planets,
    filterPlanets,
    setcolumnFilter,
    setcomparisonFilter,
    setnumberFilter,
    applyFilters,
    numberFilter,
    optionsColumnFilter,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
