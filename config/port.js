var appPort = function(app){
  var port = 3000;
  app.listen(port, () => console.log('Listening on port 3000'));
  return app;
}
module.exports = appPort;
