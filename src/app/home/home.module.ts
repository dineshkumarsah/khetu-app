import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreComponent } from './components/store/store.component';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [StoreComponent, ProductsComponent, CardComponent, ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
