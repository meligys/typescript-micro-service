// External dependencies
import { expect } from 'chai';
import 'mocha';
import Account from '../../domains/Account';
import IAccount from '../../interfaces/IAccount';


describe('Trying to discover batmans name', () => {
  it('Discovers Batmans na.. oups !', () => {

    // Given
    let account: IAccount = {
      name: "Bruce"
    }
    
    // When
    account = Account.whoIsBatman(account);

    let expectedName: string = "Bruce Wayne";

    // Then
    expect(account.name).to.be.equal(expectedName);
  })
})