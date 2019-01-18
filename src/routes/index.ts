import AccountController from "../controllers/AccountController";

let routes = function(app: any) {

  app.post('/api/accounts', AccountController.create);
}

export default routes;