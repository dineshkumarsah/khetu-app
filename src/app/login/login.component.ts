import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
// import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../services/customer.service'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted = false;
  credential: User;
  loginErrorMessage: string
  ErrorMessage: any;
  get formControls() { return this.authForm.controls; }
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,
    private cusService: CustomerService) { }

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

  // signIn() {

  //   this.isSubmitted = true;
  //   if (this.authForm.invalid) {
  //     return;
  //   }
  //   this.authService.signIn(this.authForm.value);
  //   this.router.navigateByUrl('/admin');

  // }

  // getCredential() {

  //   let credential = {
  //     "username": "dinesh",
  //     "password": "Dsah@1234"
  //   }
  //   this.authService.getCredential(credential).subscribe({
  //     next: (credential) => {
  //       this.credential = credential;
  //       this.authService.signIn(credential)
  //       // if (this.credential) {
  //       //   this.router.navigate(['/admin']);
  //       // }
  //       // else {
  //       //   this.router.navigate(['/login']);
  //       // }

  //     }
  //     ,
  //     error: (error:HttpErrorResponse) => {
  //      this.loginErrorMessage=error.error.message;

  //     }
  //   });

  // }

  login() {
    let credential = {
      "username": this.authForm.controls.email.value,
      "password": this.authForm.controls.password.value
    }

    this.authService.getCustomerToken(credential).subscribe({
      next: (res) => {
        if (res) {
          this.router.navigate(['home'])
          console.log(res);
        }
      },
      error: (error) => {
        this.ErrorMessage = error.error.message;
      }

    })

  }

} 
