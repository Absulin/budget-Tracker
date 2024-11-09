import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { IncomeComponent } from './components/income/income.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MonthlySummaryComponent } from './components/monthly-summary/monthly-summary.component';

  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'income', component: IncomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'monthly-summary', component: MonthlySummaryComponent },

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
