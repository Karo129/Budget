import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {
  substription: Subscription;
  budget: number;
  remaining: number;
  listExpenses: any[] = [];

  constructor(private _budgetService: BudgetService){
    this.budget =0;
    this.remaining = 0;
    this.substription = this._budgetService.getExpense().subscribe(date => {
  this.remaining = this.remaining - date.amount;
      this.listExpenses.push(date);
    });
  }

  ngOnInit(): void {
    this.budget= this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }

ngOnDestroy(): void {
  this.substription.unsubscribe();
}

addColor(){
  if(this.budget /4 > this.remaining){
    return 'alert alert-danger';
  }else if (this.budget/2 > this.remaining){
    return 'alert alert-warning';
  }else {
    return 'alert alert-secondary';
  }
}
}
