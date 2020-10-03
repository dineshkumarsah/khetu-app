import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CartmagentoService} from '../services/cartmagento.service'

@Component({
  selector: 'app-magentocart',
  templateUrl: './magentocart.component.html',
  styleUrls: ['./magentocart.component.css']
})
export class MagentocartComponent implements OnInit {

  constructor(private cartService: CartmagentoService) { }

  ngOnInit() {
  }

  createCart(){
    debugger
  this.cartService.createCart().subscribe({
    next: (res)=>{
     
     
    },
    error: (error: HttpErrorResponse)=>{
 
     
    }
  })

  
  }

}
