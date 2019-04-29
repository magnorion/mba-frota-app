module.exports = (app) => {
  const carros = app.controllers.carros;
  app.get('/lista-carros', carros.listaCarros);
}
