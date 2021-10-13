const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const branchRouter = require('./branchOffices.router');
const categoryRouter = require('./categories.router');
const marcasRouter = require ('./marcas.router');

function routerApi(app){
  app.use('/products',productsRouter);
  app.use('/users',usersRouter);
  app.use('/branch-offices',branchRouter);
  app.use('/categories',categoryRouter);
  app.use('/marcas',marcasRouter)

}

module.exports =routerApi;
