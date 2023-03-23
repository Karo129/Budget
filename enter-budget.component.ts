import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css'],
})
export class EnterBudgetComponent implements OnInit {
  amount: number;
  amountIncorrect: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.amount = 0;
    this.amountIncorrect = false;
  }
  ngOnInit(): void {}

  agregar() {
    if (this.amount > 0) {
      this.amountIncorrect = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remaining = this.amount;
      this.router.navigate(['/expense']);
    } else {
      this.amountIncorrect = true;
    }
  }
}
