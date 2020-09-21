import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted = false;
  credential: User;
  loginErrorMessage:string
  get formControls() { return this.authForm.controls; }
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.authForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
    console.log(this.authForm);
    

  }

  signIn() {
  
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/admin');

  }

  getCredential() {

    let credential = {
      "username": this.authForm.controls.email.value,
      "password": this.authForm.controls.password.value
    }
    this.authService.getCredential(credential).subscribe({
      next: (credential) => {
        this.credential = credential;
        this.authService.signIn(credential)
        if (this.credential) {
          this.router.navigate(['/admin']);
        }
        else {
          this.router.navigate(['/login']);
        }

      }
      ,
      error: (error:HttpErrorResponse) => {
       this.loginErrorMessage=error.error.message;
       
      

      }
    });
    console.log(this.authForm);
  }


} 
