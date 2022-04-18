const requestApi = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await request.json();
  const { results } = data;
  return results;
};

export default requestApi;
