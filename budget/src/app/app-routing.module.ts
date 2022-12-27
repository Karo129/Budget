import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpenseComponent } from './components/expense/expense.component';

const routes: Routes = [
{path: '', redirectTo: '/enterBudget', pathMatch: 'full'},
{path: 'enterBudget', component: EnterBudgetComponent},
{path: 'expense', component: ExpenseComponent},
{path: '**', redirectTo: '/enterBudget', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
