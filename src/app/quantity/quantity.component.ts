import { Component, Input, OnInit } from '@angular/core';
import { ProductSechema } from '../model/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  quantity: number =0;
@Input('product') product: any
  constructor(private cartService: CartService) { }

  ngOnInit() {
    debugger

    this.cartService.getCartObservable.subscribe({
      next: (res)=>{
       this.quantity= this.cartService.getQuantity(this.product)
        
      }
    })
  
    
  }


  decreaseQuantity(){
    this.quantity--
    this.cartService.setquantity(this.product,this.quantity)
  }
  increaseQuantity(){
    

    this.quantity++
    this.cartService.setquantity(this.product,this.quantity)
  }

}
