import React, { useContext } from 'react';
import globalContext from '../context/GlobalContext';

function Filters() {
  const {
    setcolumnFilter,
    setcomparisonFilter,
    setnumberFilter,
    applyFilters,
    filterPlanets,
    numberFilter,
    optionsColumnFilter,
  } = useContext(globalContext);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={ ({ target }) => filterPlanets(target.value) }
          data-testid="name-filter"
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setcolumnFilter(target.value) }
        >
          {optionsColumnFilter.map((filter, i) => <option key={ i }>{filter}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setcomparisonFilter(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setnumberFilter(target.value) }
          value={ numberFilter }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => applyFilters() }
        >
          FILTRAR
        </button>
      </div>
    </>
  );
}

export default Filters;
