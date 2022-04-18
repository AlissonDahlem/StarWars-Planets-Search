import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestApi from '../helpers/requestApi';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getData() {
      setPlanets(await requestApi());
    }
    getData();
  }, []);

  const contextValue = {
    planets,
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
