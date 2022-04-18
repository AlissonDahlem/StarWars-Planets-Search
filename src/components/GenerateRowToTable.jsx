import React from 'react';
import PropTypes from 'prop-types';

function GenerateRowToTable({ planetName,
  rotationPeriod,
  obitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
  films,
  created,
  edited,
  url,
}) {
  return (
    <tr>
      <td>{ planetName }</td>
      <td>{ rotationPeriod }</td>
      <td>{ obitalPeriod }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surfaceWater }</td>
      <td>{ population }</td>
      <td>{ films }</td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

GenerateRowToTable.propTypes = {
  planetName: PropTypes.string,
  rotationPeriod: PropTypes.string,
  obitalPeriod: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surfaceWater: PropTypes.string,
  population: PropTypes.string,
  films: PropTypes.string,
  created: PropTypes.string,
  edited: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default GenerateRowToTable;
