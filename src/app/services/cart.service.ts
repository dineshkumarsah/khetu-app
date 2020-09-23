import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {Cart} from 'src/app/model/cart.model'

import {ProductbyidService} from 'src/app/services/productbyid.service'
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _obeservable: BehaviorSubject<Object>
   cart={}

  constructor(productService: ProductbyidService) {
    if(!this.isCartExist){
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
    this. readDataFromCart()
    this._obeservable = new BehaviorSubject(this.cart)
   
   }

   readDataFromCart(){
     this.cart=JSON.parse(localStorage.getItem('cart'))   
   }
   writeDataToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cart)) 
   }

  get  getCartObservable(){
     return this._obeservable
   }


   isCartExist(){
     if(localStorage.getItem('cart')){
       return true
     }else{
       return false
     }
   }
   getQuantity(product: Product){
     return this.cart[product.id] ?  +this.cart[product.id]:0
  }

   

   addToCart(product: Product){

    let quantity=this.cart[ product.id];

    if(quantity){
      this.cart[product.id]=(+quantity)+1
    }else{
      this.cart[product.id]=1;
    }

    localStorage.setItem("cart",JSON.stringify(this.cart))
    // this._obeservable= new BehaviorSubject(this.cart);
    this._obeservable.next(this.cart)
  
   
  }
   getFromCart(){
     return localStorage.getItem('cart');
   }


   addProduct(product: Product){

   }
   
   removeProduct(product: Product){

  }
  setquantity(Product: Product,quantity: number){
    if(quantity<1){
      delete this.cart[Product.id];}
      else{
        this.cart[Product.id]=quantity
      }
      this.writeDataToLocalStorage();
      this._obeservable.next(this.cart)
    }



  
}
