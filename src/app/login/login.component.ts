import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  ErrorMessage: any;
  get formControls() { return this.authForm.controls; }
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.saveAdminTokenToLocalStorage()
    this.authForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  saveAdminTokenToLocalStorage() {
    const usename = "dinesh";
    const password = "Dsah@1234";
    const adminCredential = {
      "username": usename,
      "password": password
    }
    this.authService.getAdminToken(adminCredential).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  login() {
    let credential = {
      "username": this.authForm.controls.email.value,
      "password": this.authForm.controls.password.value
    }
    this.authService.getCustomerToken(credential).subscribe({
      next: (res) => {
        if (res) {
          this.createCart();
          this.router.navigate(['home'])
          console.log(res);
        }
      },
      error: (error) => {
        this.ErrorMessage = error.error.message;
      }
    })
  }
  /**
   * create cart for customer
   */

  createCart() {
    this.authService.magentoCartCreate().subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('quote_id',res.toLocaleString())

      },
      error: (error: HttpErrorResponse) => {
        console.log(error);

      }
    })
  }

} 
