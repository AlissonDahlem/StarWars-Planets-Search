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

  function applyFilters() {
    if (comparisonFilter === 'maior que') {
      return setPlanets(planetsRecover.filter((element) => (
        parseFloat(element[columnFilter]) > parseFloat(numberFilter))));
    } if (comparisonFilter === 'menor que') {
      return setPlanets(planetsRecover.filter((element) => (
        parseFloat(element[columnFilter]) < parseFloat(numberFilter))));
    } if (comparisonFilter === 'igual a') {
      return setPlanets(planetsRecover.filter((element) => (
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
