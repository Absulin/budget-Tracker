import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Expense {
  category: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetServiceService {
  
  private apiUrl = 'http://localhost/dbapp_api/';

  constructor(private http: HttpClient) {}

  // Expense Methods
  getExpenses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/add_expense.php`).pipe(
      catchError(this.handleError)
    );
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_expense.php`, expense).pipe(
      catchError(this.handleError)
    );
  }

  editExpense(expense: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/add_expense.php`, expense).pipe(
      catchError(this.handleError)
    );
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/add_expense.php?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Category Methods
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/add_category.php`).pipe(
      catchError(this.handleError)
    );
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_category.php`, category).pipe(
      catchError(this.handleError)
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/add_category.php?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Income Methods
  getIncome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_income.php`).pipe(
      catchError(this.handleError)
    );
  }

  addIncome(income: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_income.php`, income).pipe(
      catchError(this.handleError)
    );
  }

  deleteIncome(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/add_income.php?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getMonthlySummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/monthly_summary.php`).pipe(
      catchError(this.handleError)
    );
  }

  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrl}/fetchCategory.php`).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
