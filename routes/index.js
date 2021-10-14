const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const branchRouter = require('./branchOffices.router');
const categoryRouter = require('./categories.router');
const marcasRouter = require ('./marcas.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/branch-offices',branchRouter);
  router.use('/categories',categoryRouter);
  router.use('/marcas',marcasRouter)

}

module.exports =routerApi;
