import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProductbyidService} from '../services/productbyid.service'
import {UrlService} from '../services/url.service'

@Component({
  selector: 'app-productbyid',
  templateUrl: './productbyid.component.html',
  styleUrls: ['./productbyid.component.css']
})
export class ProductbyidComponent implements OnInit {
  products:any;

  constructor( private productById: ProductbyidService,private url: UrlService) { }

  ngOnInit() {
    this.getProductById()
  }

  getProductById(){
    let url=this.url.getNewUrl("3");
    this.productById.getProductByid(url).subscribe({
      next: (result)=>{
        this.products=result
  
        
      },
      error: (error: HttpErrorResponse)=>{
   
        
      }
    })
  }

}
