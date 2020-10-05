import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';
import { CartService } from 'src/app/home/services/cart.service';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  quote_id: string;
  quantity: number=0

  @Input('product') product: Product

  constructor(private authService : AuthService,private cartService: CartService) { }

  ngOnInit() {
   
    console.log(this.product);
    this.quote_id=localStorage.getItem('quote_id')
    

   
    
  }
  addItemToCart(){
    
    if( this.quote_id){
      let cartItem: CartItem={
        sku: this.product.sku,
        qty: 1,
        quote_id: this.quote_id
      }
  
      let item: Order={
       cartItem: cartItem
      }
      this.cartService.addTocart(item).subscribe({
       next: (res)=>{
         console.log(res);
         
       } ,
       error: (error)=>{
        console.log(error);
        
       }
      })

    }

  }
  

}
