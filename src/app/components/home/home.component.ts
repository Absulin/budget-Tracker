import { Component, OnInit } from '@angular/core';
import { BudgetServiceService,Expense } from 'src/app/services/budget-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  expenses: Expense[] = [];
 

  constructor(private expenseService: BudgetServiceService) {}

  ngOnInit(): void {
    this.loadExpense();
  }

  loadExpense(): void {
    this.expenseService.getExpense().subscribe(
      (data: Expense[]) => {
        this.expenses = data;
      },
      error => {
        console.error('Error fetching expenses', error);
      }
    );
  }
  }

