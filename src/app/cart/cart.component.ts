import { Component, OnInit } from '@angular/core';


import { ProductbyidService } from 'src/app/services/productbyid.service';
import { CartService } from 'src/app/services/cart.service'
import { ProductSechema } from '../model/product.model';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Product } from '../model/product';
interface cartItems {
  product: Product,
  quantity: number;

}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cartItems[] = [];
  total:number = 0;
  show: boolean;
  spineer: boolean=true

  constructor(private productByidService: ProductbyidService, private cartService: CartService) { }

  ngOnInit() {
    this.cartSubcriber();

    
  }

  cartSubcriber() {
    debugger;
   
    
    this.cartService.getCartObservable.subscribe({
      
      next: (cart) => {
        // this.cartItems = []
        let cartObservable = [];
        this.total=0
        for (let id in cart) {
          cartObservable.push(this.productByidService.getProductByIdSchema(id).pipe(
            map((product) => {
              
            this.total= this.total+ (cart[id])
            let cartProduct: Product={
              name: product.items[0].name,
              price:String(product.items[0].price),
              image:product.items[0].media_gallery_entries[0].file,
              id:String(product.items[0].id)
            }
              let cartItem: cartItems = {
                product: cartProduct,
                quantity: cart[id]
              }
              return cartItem
            })
          )
          )
          
        }

        forkJoin(cartObservable).subscribe({
          next: (res: cartItems[]) => {
            this.cartItems = res
            console.log(this.cartItems);
            // this.calculateTotal(this.cartItems)

                  

          }
        })
       

      },
      error: (error) => {

      }
    })

  }
  
}
