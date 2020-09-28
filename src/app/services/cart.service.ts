import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {Cart} from 'src/app/model/cart.model';
import {HttpClient} from '@angular/common/http'


import {ProductbyidService} from 'src/app/services/productbyid.service'
import { Product } from '../model/product';
import {CustomerService} from 'src/app/services/customer.service';




@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart={}
  carUrl="/index.php/rest/default/V1/carts/mine"
  private _obeservable: BehaviorSubject<Object>
 

  constructor(productService: ProductbyidService, private customerService: CustomerService,
    private http: HttpClient, ) {
    debugger
    if(!this.isCartExist()  ){
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
        // if(Product.id!=undefined)
        this.cart[Product.id]=quantity
      }
      this.writeDataToLocalStorage();
      this._obeservable.next(this.cart)
    }
    // create Cart on magento 
    
  // getProductByIdSchema(id: string){
  //   return this.http.get<ProductSechema>(this.url.getProductByid(id),{
  //     headers:{
  //       'authorization': this.authService.getToken()
  //     }
  //   })
  // }
     magentoCartCreate(){
      return this.http.post(this.carUrl,{
        headers:{
                'authorization': this.customerService.CustomerTokens()
              }
      })
     }



  
}
