import { Component ,OnInit} from '@angular/core';
import { BudgetServiceService} from 'src/app/services/budget-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent 
  implements OnInit {
    totalIncome = 0;
    totalExpenses = 0;
    balance = 0;
  
    constructor(private budgetService: BudgetServiceService) {}
  
    ngOnInit(): void {
      this.budgetService.getMonthlySummary().subscribe(data => {
        this.totalIncome = data.totalIncome || 0;
        this.totalExpenses = data.totalExpenses || 0;
        this.balance = this.totalIncome - this.totalExpenses;
      });
    }

}
