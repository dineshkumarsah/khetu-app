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
@Input("products") product:any;
@Input("cart_Id") cart_Id:any;

  options: any[]=[];
  nrSelect:any
  constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit() {
    this.addCartOption()
  
    console.log(  "product input-->",this.cart_Id);
    

    
    this.getCart();
    this. getQuantity();

    
  //  this.token=this.authService.getCustomerLoginToken()
  //this.cartService.cart;
  }
  addToCart(){
    debugger
   
    // this.quantity++
    // this.cartService.addToCart(id,this.quantity)

    this.cartService.addToCart(this.product);
    this. magentoAddTocart();
  // this.MagentocreateCart()
    // this.cartService.magentoCartCreate().subscribe({
    //   next: (res)=>{
       
        
    //   }
    // })
  }

  magentoAddTocart(){
    debugger
    let cartItem: CartItems={
      cartItem:{
        sku: this.product.sku,
        qty: 1,
        quote_id:this.cart_Id      }
    }
    this.cartService.magentoAddTocart(cartItem).subscribe({
      next: (res)=>{
        console.log(res);
        
      },
      error: (error: HttpErrorResponse)=>{
       console.log(error);
       
      }
    });
  }

  getCart(){
    
    
    
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
    
        
      },
      error:(res: HttpErrorResponse)=>{
   
       
      }
    })
  }
 
  addCartOption(){

    // for(let i=1;i<3;i++){
    //   this.options.push(100*i)
    // }
    // Array(2).fill('').forEach((e,index)=>{
    //   this.options.push((index+1)*100)
    // })
    this.options=["Standard","Extras"]
    this.nrSelect=this.options[0]

  }

  

}
