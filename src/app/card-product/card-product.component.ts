import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {CartService} from 'src/app/services/cart.service'
import { HttpErrorResponse } from '@angular/common/http';


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
  options: any;
  constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit() {
  //  this.addCartOption()

    
    this.getCart();
    this. getQuantity();
    console.log(this.product);
    
  //  this.token=this.authService.getCustomerLoginToken()
  //this.cartService.cart;
  }
  addToCart(){
    debugger
   
    // this.quantity++
    // this.cartService.addToCart(id,this.quantity)
    console.log(this.product);
    this.cartService.addToCart(this.product);
    this.MagentocreateCart()
    // this.cartService.magentoCartCreate().subscribe({
    //   next: (res)=>{
       
        
    //   }
    // })
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

  MagentocreateCart(){
    debugger;
    this.cartService.magentoCartCreate().subscribe({
      next: (res)=>{
        console.log("--------------->",res);
        
      },
      error:(res: HttpErrorResponse)=>{
       console.log(res);
       
      }
    })
  }
 
  addCartOption(){
    Array(2).fill('').forEach((e,index)=>{
      this.options.push(((index+1)*100))
    })

  }

  

}
