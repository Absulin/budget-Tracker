import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from 'src/app/services/budget-service.service';


@Component({
  selector: 'app-monthly-summary',
  templateUrl: './monthly-summary.component.html',
  styleUrls: ['./monthly-summary.component.css']
})
export class MonthlySummaryComponent implements OnInit{
  totalIncome: number = 0;
  totalExpenses: number = 0;
  remainingBudget: number = 0;
  // summaryChartData: ChartDataset[] = [];
  // summaryChartLabels: string[] = [];
  // summaryChartOptions: ChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' // Make sure to configure the legend correctly
  //     }
  //   }
  // };

  constructor(private budgetservice:BudgetServiceService) {}

  ngOnInit() {
    // this.loadIncome();
    // this.loadExpenses();
   }

  // loadIncome() {
  //   this.budgetservice.getIncome().subscribe((income: { amount: number }[]) => {
  //     this.totalIncome = income.reduce((sum: number, item: { amount: number }) => sum + item.amount, 0);
  //     this.updateChart();
  //   });
  // }
  
  // loadExpenses() {
  //   this.budgetservice.getExpenses().subscribe((expenses: { amount: number }[]) => {
  //     this.totalExpenses = expenses.reduce((sum: number, item: { amount: number }) => sum + item.amount, 0);
  //     this.remainingBudget = this.totalIncome - this.totalExpenses;
  //     this.updateChart(expenses);
  //   });
  // }
  
  // updateChart(expenses: any[] = []) {
  //   // Reset the chart data
  //   this.summaryChartData = [
  //     { data: [this.totalIncome, this.totalExpenses], label: 'Total Income vs Total Expenses' }
  //   ];
  //   this.summaryChartLabels = ['Total Income', 'Total Expenses'];
  // }

}
