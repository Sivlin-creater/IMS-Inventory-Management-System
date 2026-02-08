import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Api } from '../service/api';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})

export class Register {
  constructor(private api:Api, private router:Router) {}

  formData: any = {
    email: '',
    name: '',
    phoneNumber: '',
    password: ''
  };
  message:string | null = null;

  async handleSubmit(){
    if(
      !this.formData.email ||
      !this.formData.name ||
      !this.formData.phoneNumber ||
      !this.formData.password
    ){
      this.message = "All fields are required";
      return;
    }
    
    try {
      const response: any = await firstValueFrom(
        this.api.registerUser(this.formData)
      );
      if (response.status === 200){
        this.showMessage(response.message);
        this.router.navigate(['/login']);
      }
    } catch (error: any) {
      console.log(error);
      this.showMessage(error?.error?.message || 
        error?.message || 'Unable to register' + error);
  }
}

showMessage(message:string){
  this.message = message;
  setTimeout(() => {
    this.message = null;
  }, 4000);
}
}
