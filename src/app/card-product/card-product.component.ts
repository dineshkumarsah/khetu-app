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
  //  this.token=this.authService.getCustomerLoginToken()
  //this.cartService.cart;
  }
  addToCart(id: string){
  
    this.quantity++
   this.cartService.addToCart(id,this.quantity)
  
   
  }

  
  removeQuantity(){
    alert('remove')
  }
  ad(){
    console.log("qqwww");
    
  }

}
