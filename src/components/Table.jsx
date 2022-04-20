/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import GenerateRowToTable from './GenerateRowToTable';
import globalContext from '../context/GlobalContext';

function Table() {
  const { filterPlanets } = useContext(globalContext);

  return (
    <>
      <h1>table</h1>
      <table>
        <thead className="tableHead">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Popoluation</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <thead>
          {filterPlanets().map((element, index) => (
            <GenerateRowToTable
              key={ index }
              planetName={ element.name }
              rotationPeriod={ element.rotation_period }
              obitalPeriod={ element.orbital_period }
              diameter={ element.diameter }
              climate={ element.climate }
              gravity={ element.gravity }
              terrain={ element.terrain }
              surfaceWater={ element.surface_water }
              population={ element.population }
              films={ element.films }
              created={ element.created }
              edited={ element.edited }
              url={ element.url }
            />
          ))}
        </thead>
      </table>
    </>
  );
}

export default Table;
