import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css']
})
export class EnterExpenseComponent implements OnInit{
nameExpense: string;
amount: number;
formIncorrect: boolean;
textIncorrect: string;

  constructor(private _budgetService: BudgetService){
    this.nameExpense= '';
    this.amount = 0;
    this.formIncorrect = false;
    this.textIncorrect = '';

  }

  ngOnInit():void {}

  addExpense(){
    if(this.amount>this._budgetService.remaining){
      this.formIncorrect = true;
      this.textIncorrect = 'Entered amount is greater that the remaining';
      return;
    }

    if(this.nameExpense ==='' || this.amount <=0){
      this.formIncorrect = true;
      this.textIncorrect = 'Incorrect name of expense or amount'
    }else {

      //creamos el objeto
      const EXPENSE = {
        name: this.nameExpense,
        amount: this.amount
      }

  //enviamos el objeto al subscritores via subject

      this._budgetService.addNewExpense(EXPENSE);


      //resetamos el folmulario
      this.formIncorrect = false;
      this.nameExpense = '';
      this.amount = 0;
    }
  }
}
