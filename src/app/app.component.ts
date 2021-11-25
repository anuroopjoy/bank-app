import { Component } from '@angular/core';
import { BankMap, EntityMap } from './app.constants';
import { BankAccount } from './bank-account/bank-account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-app';
  bankTypes = BankMap;
  getInterest(bankType: string) {
    const bankAccount: BankAccount = EntityMap.get(bankType)!;
    if (bankAccount) {
      const interest = bankAccount.calculateInterest();
      console.log(interest);
    }
  }
}
