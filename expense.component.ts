import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  constructor(private _budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    if (this._budgetService.budget === 0) {
      this.router.navigate(['/enterBudget']);
    }
  }
}
