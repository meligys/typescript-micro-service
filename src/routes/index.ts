
var accountsRouter = require('./accounts');

let routes = function(app: any) {

  app.use('/api/accounts', accountsRouter);
}

export default routes;