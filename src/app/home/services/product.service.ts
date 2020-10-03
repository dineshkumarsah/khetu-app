import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from 'src/app/login/services/auth.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProductByCategoryId(category_id: string):Observable<Product> {
    const baseUrl = `/index.php/rest/default/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${category_id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&fields=items[sku,name,price,media_gallery_entries]`;


    return this.http.get<Product>(baseUrl,{
      headers:{
        authorization: this.authService.adminToken()
      }
    })
  }
}
