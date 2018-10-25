
import IAccount from '../interfaces/IAccount';
//const { check, validationResult } = require('express-validator/check');
import assert from 'assert';

export default class Account {

  public static defineName(account: IAccount): IAccount {
    
    account.name = "Bruce";
    return account;
  }
}