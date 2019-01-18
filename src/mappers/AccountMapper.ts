import IAccount from "../interfaces/IAccount";

export default class AccountMapper {
  
  public static mapToInterface(accountModel: any): IAccount {
    return {
      id: accountModel._id,
      name: accountModel.name,
    }
  }
}