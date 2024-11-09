import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetServiceService } from 'src/app/services/budget-service.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenseForm: FormGroup;
  categories: any[] = [];
  expenses: any[] = [];
  loadeditupdate: string = 'false';
  viewupdate: string = 'true';

  constructor(
    private fb: FormBuilder,
    private expenseService: BudgetServiceService,
  ) {
    this.expenseForm = this.fb.group({
      amount: ['', Validators.required],
      date: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.loadExpenses();
    this.loadCategories();
  }

  loadCategories() {
    this.expenseService.getCategories().subscribe((response: any) => {
      if (response.status === 'success') {
        this.categories = response.data;
      } else {
        console.error(response.message);
      }
    });
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe((response: any) => {
      if (response.status === 'success') {
        this.expenses = response.data;
      }
    });
  }

  addExpense() {
    if (this.expenseForm.valid) {
      this.expenseService.addExpense(this.expenseForm.value).subscribe((response: any) => {
        if (response.status === 'success') {
          this.expenses.push(response.data);
          this.expenseForm.reset();
          this.loadExpenses();
        } else {
          alert(response.message);
        }
      });
    }
  }
  
  editExpense(id: number) {
    const expenseToEdit = this.expenses.find(expense => expense.id === id);
    if (expenseToEdit) {
        this.expenseForm.patchValue(expenseToEdit);
        this.expenseForm.addControl('id', this.fb.control(expenseToEdit.id)); // Add this line
        this.loadeditupdate = 'true';
        this.viewupdate = 'false';
    
    }
}

  updateExpense() {
    if (this.expenseForm.valid) {
        this.expenseService.editExpense(this.expenseForm.value).subscribe((response: any) => {
            if (response.status === 'success') {
                const index = this.expenses.findIndex(expense => expense.id === response.data.id);
                this.expenses[index] = response.data;
                this.expenseForm.reset();
                this.loadeditupdate = 'false';
                this.viewupdate = 'true';
                this.loadExpenses();
              
            } else {
                alert(response.message);
            }
        });
    }
}


  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe((response: any) => {
      if (response.status === 'deleted') {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
      } else {
        alert(response.message);
      }
    });
  }
}
