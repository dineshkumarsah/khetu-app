import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {CustomerService} from '../services/customer.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customerSubscription: Subscription;
  show:boolean=false

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit() {
  this.customerSubscription = this.customerService.loginObservable.subscribe({
    next: (result)=>{
   
      
    }
  })
  }

  SignUp(){
    this.router.navigate(['/customer']);
  }

}
