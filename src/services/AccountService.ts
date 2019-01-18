
// Interfaces
import IAccount from "../interfaces/IAccount";

import AccountModel from "../models/AccountModel";
import Account from "../domains/Account";
import AccountMapper from "../mappers/AccountMapper";

export default class AccountService {

  // FIXME: Should return Promise<AccountModel>
  public static create(accountToCreate: IAccount): Promise<IAccount> {
    // Do business staff
    let accountWithName: IAccount = Account.whoIsBatman(accountToCreate);    

    let accountModel = new AccountModel();
    accountModel.name = accountWithName.name;

    return AccountService.save(accountModel)
  }

  public static save(accountModel: any): Promise<IAccount> {
    return new Promise((resolve: any, reject: any) => {
      accountModel.save((err: any, savedAccount: any) => {
        if (err) {
          reject(err);
          return;
        }

        let account: IAccount = AccountMapper.mapToInterface(savedAccount);

        resolve(account);
      })
    })
  }
}