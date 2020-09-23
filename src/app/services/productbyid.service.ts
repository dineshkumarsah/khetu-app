import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Product } from '../model/product'
import { map } from 'rxjs/operators';
import {UrlService} from 'src/app/services/url.service';
import { ProductSechema } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductbyidService {
  baseUrl = "/index.php/rest/default/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&%20searchCriteria[filter_groups][0][filters][0][value]=6&%20searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[pageSize]=10"
  urlProductbyId="/index.php/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=entity_id&searchCriteria[filterGroups][0][filters][0][condition_type]=eq&searchCriteria[filterGroups][0][filters][0][value]=46"
  productArray: Product[] = []

  constructor(private http: HttpClient, private authService: AuthService,private url: UrlService) { }

  getProductByid(url: string) {
    this.productArray = []
    if (this.getCustomerToken()) {
      return this.http.get(url, {
        headers: {
          'authorization': this.authService.getToken()
        }
      }).pipe(
        map((res) => {
          let substring
          let p = res['items']
          console.log(res);

          let products: Product
          for (let i = 0; i < res['items'].length; i++) {
            let p2 = p[i].media_gallery_entries.length > 0 ? p[i].media_gallery_entries[0].file : ""

            if (p.length > 0) {
              substring = p2.substring(4, p2.length);
            }

            products = {
              name: p[i].name,
              price: p[i].price,
              image: substring,  //p[i].media_gallery_entries.length>0 ? p[i].media_gallery_entries[0].file:"",
              id: p[i].id,
            }
            this.productArray.push(products)
          }
          return this.productArray

        })
      )
    }

  }

  getProductByIdSchema(id: string){
    return this.http.get<ProductSechema>(this.url.getProductByid(id),{
      headers:{
        'authorization': this.authService.getToken()
      }
    })
  }

  getCustomerToken() {
    return localStorage.getItem('customerToken') != null
  }
}
