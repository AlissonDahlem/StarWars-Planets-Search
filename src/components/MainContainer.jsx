import React, { useContext } from 'react';
import globalContext from '../context/GlobalContext';
import Table from './Table';

function MainContainer() {
  const { setFilterByName } = useContext(globalContext);
  return (
    <>
      <input
        type="text"
        onChange={ ({ target }) => setFilterByName(target.value) }
        data-testid="name-filter"
      />
      <Table />
    </>
  );
}

export default MainContainer;
