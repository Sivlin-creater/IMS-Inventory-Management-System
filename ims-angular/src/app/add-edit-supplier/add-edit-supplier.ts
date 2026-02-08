import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../service/api';

@Component({
  selector: 'app-add-edit-supplier',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-edit-supplier.html',
  styleUrls: ['./add-edit-supplier.css'],
})

export class AddEditSupplier implements OnInit {
  constructor(private api: Api, private router: Router) {}
  message: string = '';
  isEditing: boolean = false;
  supplierId: string | null = null;

  formData: any = {
    name: '',
    address: '',
  };

  ngOnInit(): void {
    this.supplierId = this.router.url.split('/')[2]; //extracting supplier id from url
    if (this.supplierId) {
      this.isEditing = true;
      this.fetchSupplier();
    }
  }

  fetchSupplier(): void {
    this.api.getSupplierById(this.supplierId!).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.formData = {
            name: res.supplier.name,
            address: res.supplier.address,
          };
        }
      },
      error: (error) => {
        this.showMessage(
          error?.error?.message ||
            error?.message ||
            'Unable to get supplier by id' + error
        );
      },
    });
  }

  // HANDLE FORM SUBMISSION
  handleSubmit() {
    if (!this.formData.name || !this.formData.address) {
      this.showMessage('All fields are nessary');
      return;
    }

    //prepare data for submission
    const supplierData = {
      name: this.formData.name,
      address: this.formData.address,
    };
    

    if (this.isEditing) {
      this.api.updateSupplier(this.supplierId!, supplierData).subscribe({
        next:(res:any) =>{
          if (res.status === 200) {
            this.showMessage("Supplier updated successfully");
            this.router.navigate(['/supplier'])
          }
        },
        error:(error) =>{
          this.showMessage(error?.error?.message || error?.message || "Unable to edit supplier" + error)
        }
      })
    } else {
      this.api.addSupplier(supplierData).subscribe({
        next:(res:any) =>{
          if (res.status === 200) {
            this.showMessage("Supplier Added successfully");
            this.router.navigate(['/supplier'])
          }
        },
        error:(error) =>{
          this.showMessage(error?.error?.message || error?.message || "Unable to Add supplier" + error)
        }
      })
    }
  }


  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }

}
