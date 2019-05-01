module.exports = (app) => {
  const carros = app.controllers.carros;
  const path = require('path');

  app.get('/lista-carros', carros.listaCarros);
  app.get('/travel', carros.travel);
  app.get('/buscar-cliente', carros.buscarCliente);
  app.get('*', (req, res) => {
    const index = path.join(__dirname, '../../app/dist/front-app-frota/index.html');
    res.sendFile(index);
  });
}
