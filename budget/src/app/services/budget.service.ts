
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget: number;
  remaining: number;
  private expenses$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.remaining = 0;
   }


addNewExpense(expense: any){
this.remaining = this.remaining - expense.amount;
this.expenses$.next(expense);
}

getExpense():Observable<any>{
  return this.expenses$.asObservable();
}



}
