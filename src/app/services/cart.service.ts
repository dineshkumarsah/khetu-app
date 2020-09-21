import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Cart} from 'src/app/model/cart.model'

import {ProductbyidService} from 'src/app/services/productbyid.service'
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  _obeservable: BehaviorSubject<Cart>
   cart={}

  constructor(productService: ProductbyidService) {
    localStorage.setItem('cart',JSON.stringify(this.cart))
   }

   

   addToCart(id:string,quantity){
     this.cart[id]=quantity;
     localStorage.setItem("cart",JSON.stringify(this.cart))
     console.log(this.cart);
     
   
   }



  
}
