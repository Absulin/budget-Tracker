import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetServiceService } from 'src/app/services/budget-service.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categoryForm: FormGroup;
  categories: any[] = [];
 

  constructor(private fb: FormBuilder, private budgetService: BudgetServiceService) {
    // Initialize the form
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.budgetService.getCategories().subscribe((response: any) => {
      if (response.status === 'success') {
        this.categories = response.data;  // Assuming data is the array of categories
      } else {
        console.error(response.message);
      }
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      // Prepare the data to send
      const categoryData = {
        name: this.categoryForm.value.name,
      };

      // Call the service to add the category
      this.budgetService.addCategory(categoryData).subscribe(() => {
        // Reload the categories after adding a new one
        this.loadCategories();
        this.categoryForm.reset(); // Reset the form
      });
    }
  }

  deleteCategory(id: number) {
    this.budgetService.deleteCategory(id).subscribe(response => {
      if (response.status === 'deleted') {
       alert('Deleted')
      }
      
      this.loadCategories();
    }, error => {
      console.error('Error deleting category:', error);
    
    });
  } 
}
