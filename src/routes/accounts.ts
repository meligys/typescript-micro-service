import express, { Response, Request, NextFunction }  from 'express';
import IAccount from '../interfaces/IAccount';
import Account from '../domains/Account';

let router = express.Router();

router.post('/', function(req: Request, res: Response, next: NextFunction) {  
    
    let account: IAccount = req.body.account;
    let accountWithName: IAccount = Account.defineName(account);    
    return res.send({account: accountWithName});
});


module.exports = router;