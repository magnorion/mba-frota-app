module.exports = (app) => {
  const axios = require('axios'),
  url = 'https://frota-v2-api.herokuapp.com/frotasV2';

  this.listaCarros = async function (req, res) {
    await axios.get(`${url}/listaCarros`)
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
  }

  return this;
}
