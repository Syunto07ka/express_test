var appRoutes = function(app){

  var indexRouter = require('../app/routes/index');
  var usersRouter = require('../app/routes/users');
  var postsRouter = require('../app/routes/posts');

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/posts', postsRouter);

  return app;
}
module.exports = appRoutes;

