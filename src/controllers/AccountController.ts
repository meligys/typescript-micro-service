import { Response, Request, NextFunction }  from 'express';
import IAccount from '../interfaces/IAccount';

import AccountService from '../services/AccountService';

export default class AccountController {

  public static create(req: Request, res: Response, next: NextFunction) {

    let account: IAccount = req.body.account;
    AccountService.create(account)
    .then(account => {
      return res.send({account});
    })
    .catch(exception => {
      return res.status(500).send(exception.message);
    })
  }
}