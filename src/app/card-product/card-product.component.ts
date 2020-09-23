import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {CartService} from 'src/app/services/cart.service'


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  token:boolean=false
  dk: boolean=false
  quantity:number=0
@Input("products") product:any
  constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit() {
    
    this.getCart();
    this. getQuantity();
    console.log(this.product);
    
  //  this.token=this.authService.getCustomerLoginToken()
  //this.cartService.cart;
  }
  addToCart(){
    // this.quantity++
    // this.cartService.addToCart(id,this.quantity)
    console.log(this.product);
    this.cartService.addToCart(this.product)
  }

  getCart(){
    console.log(this.cartService.getFromCart());
    
    
  }

  
  

  getQuantity(){
    
    this.cartService.getCartObservable.subscribe({
      next: (res)=>{
       this.quantity= this.cartService.getQuantity(this.product)
        
      }
    })
  }

}
