import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { EnterExpenseComponent } from './components/expense/enter-expense/enter-expense.component';
import { ListExpenseComponent } from './components/expense/list-expense/list-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterBudgetComponent,
    ExpenseComponent,
    EnterExpenseComponent,
    ListExpenseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
