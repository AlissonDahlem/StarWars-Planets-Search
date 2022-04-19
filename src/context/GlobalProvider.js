import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestApi from '../helpers/requestApi';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState([]);

  useEffect(() => {
    async function getData() {
      setPlanets(await requestApi());
    }
    getData();
  }, []);

  const filterPlanets = () => (
    planets.filter(({ name }) => name.toLowerCase().includes(filterByName))
  );

  const contextValue = {
    planets,
    setFilterByName,
    filterPlanets,
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
