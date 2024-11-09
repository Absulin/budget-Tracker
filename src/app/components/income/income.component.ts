import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetServiceService } from 'src/app/services/budget-service.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  incomeForm: FormGroup;
  incomeList: any[] = [];

  constructor(private fb: FormBuilder, private incomeService: BudgetServiceService) {
    this.incomeForm = this.fb.group({
      source: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadIncome();
  }

  loadIncome() {
    this.incomeService.getIncome().subscribe((response: any) => {
      if (response.status === 'success') {
        this.incomeList = response.data;
      }
    });
  }

  addIncome() {
    if (this.incomeForm.valid) {
      this.incomeService.addIncome(this.incomeForm.value).subscribe((response: any) => {
        if (response.status === 'success') {
          this.incomeList.push(response.data);
          this.incomeForm.reset();
          this.loadIncome();
        } else {
          alert(response.message);
        }
      });
    }
  }

  deleteIncome(id: any) {
    this.incomeService.deleteIncome(id).subscribe((response: any) => {
      if (response.status === 'deleted') {
        this.incomeList = this.incomeList.filter(income => income.id !== id);
      } else {
        alert(response.message);
      }
    });
    this.loadIncome();
  }
  

 
}
