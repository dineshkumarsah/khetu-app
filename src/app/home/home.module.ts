import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreComponent } from './components/store/store.component';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [StoreComponent, ProductsComponent, CardComponent, CartComponent, ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
