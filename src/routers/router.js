module.exports = (app) => {
  const carros = app.controllers.carros;
  app.get('/lista-carros', carros.listaCarros);
  app.get('/travel', carros.travel);
  app.get('/buscar-cliente', carros.buscarCliente);
}
