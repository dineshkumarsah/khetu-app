import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerService} from '../services/customer.service'

@Injectable({
  providedIn: 'root'
})
export class CartmagentoService {

  constructor(private http: HttpClient,private customerService: CustomerService) { }

  url="/index.php/rest/default/V1/carts/mine"
  

  createCart(){
   
    
    
    return this.http.get(this.url,{
      headers:{
        
        authorization:this.customerService.CustomerTokens()
      }
    });
  }
}
