module.exports = (app) => {
  const axios = require('axios'),
  url = 'https://frota-v2-api.herokuapp.com/frotasV2';

  this.listaCarros = async function (req, res) {
    await axios.get(`${url}/listaCarros`)
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
  }

  this.travel = async function (req, res) {
    await axios.get(`${url}/viagem`, {params: {
      latitudeCliente: req.query.latitudeCliente,
      longitudeCliente: req.query.longitudeCliente,
      latitudeViagem: req.query.latitudeViagem,
      longitudeViagem: req.query.longitudeViagem
    }})
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
  }

  this.buscarCliente = async function (req, res) {
    await axios.get(`${url}/buscarCliente`, { params: {
      latitudeCliente: req.query.latitudeCliente,
      longitudeCliente: req.query.longitudeCliente
    }})
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
  }

  return this;
}
