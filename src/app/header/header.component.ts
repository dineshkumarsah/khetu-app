import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {CustomerService} from '../services/customer.service';
import {CartService} from 'src/app/home/services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customerSubscription: Subscription;
  show:boolean=false
  quantity: number;

  constructor(private customerService: CustomerService,private router: Router,private cartService: CartService) { }

  ngOnInit() {
    debugger;
  this.customerSubscription = this.customerService.loginObservable.subscribe({
    next: (result)=>{
   
      
    }
  })
  this.cartService.QuantityObservable.subscribe({
    next:(res)=>{
      this.quantity=res
      console.log(res);
      
    }
  })
  this.cartService.orderItem()
  }

  SignUp(){
    this.router.navigate(['/customer']);
  }

}
