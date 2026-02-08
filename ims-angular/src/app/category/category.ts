import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../service/api';

interface Category {
  id: string,
  name: string,
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css'],
})

export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  categoryName: string = '';
  message: string = '';
  isEditing:boolean = false;
  editingCategoryId: string | null = null;

  constructor(private api:Api) { }

  ngOnInit(): void {
    this.getCategories();
  }

  //GET ALL CATEGORIES
  getCategories():void{
    this.api.getAllCategory().subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.categories = res.categories;
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to get all categories" + error)
      }
    })
  }


  //ADD A NEW CATEGORY
  addCategory():void{
    if (!this.categoryName) {
      this.showMessage("Category name is required");
      return;
    }
    this.api.createCategory({name:this.categoryName}).subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.showMessage("Category added successfully")
          this.categoryName = '';
          this.getCategories();
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to save category" + error)
      }
    })
  }


  // EDIT CATEGORY
  editCategory():void{
    if (!this.editingCategoryId || !this.categoryName) {
      return;
    }
    this.api.updateCategory(this.editingCategoryId, {name:this.categoryName}).subscribe({
      next:(res:any) =>{
        if (res.status === 200) {
          this.showMessage("Category updated successfully")
          this.categoryName = '';
          this.isEditing = false;
          this.getCategories();
        }
      },
      error:(error) =>{
        this.showMessage(error?.error?.message || error?.message || "Unable to edit category" + error)
      }
    })
  }

  //set the category to edit
  handleEditCategory(category:Category):void{
    this.isEditing = true;
    this.editingCategoryId = category.id;
    this.categoryName = category.name
  }

  //Delete a caetgory
  handleDeleteCategory(categoryId: string):void{
    if (window.confirm("Are you sure you want to delete this categoy?")) {
      this.api.deleteCategory(categoryId).subscribe({
        next:(res:any) =>{
          if (res.status === 200) {
            this.showMessage("Category deleted successfully")
            this.getCategories(); //reload the category
          }
        },
        error:(error) =>{
          this.showMessage(error?.error?.message || error?.message || "Unable to Delete category" + error)
        }
      })
    }
  }

  showMessage(message:string){
    this.message = message;
    setTimeout(() =>{
      this.message = ''
    }, 4000)
  }
}
