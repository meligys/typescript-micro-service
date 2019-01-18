
import IAccount from '../interfaces/IAccount';

/** Doing business staff here */
export default class Account {

  public static whoIsBatman(account: IAccount): IAccount {
    
    account.name = "Bruce Wayne";
    return account;
  }
}