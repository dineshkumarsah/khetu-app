import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from '../model/order.model';
import { map } from 'rxjs/operators';
import { OrderedItem } from '../model/oderItem.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
   quantity=0
  private quantityObser = new BehaviorSubject(this.quantity)
  addToCartUrl="/index.php/rest/default/V1/carts/mine/items"


  constructor(private http: HttpClient ) { }

  addTocart(order: Order){
    this.quantity=this.quantity+1;
    this.quantityObser.next( this.quantity)
    return this.http.post(this.addToCartUrl,order)
  }

  get QuantityObservable(){
    
    return this.quantityObser.asObservable()
  }

  orderItem(){
    debugger
    this.http.get(this.addToCartUrl).pipe(
      map((resp: OrderedItem[])=>{
        this.quantity=resp.length
      this.quantityObser.next( this.quantity)
      return resp
      })
    )
  }
}
