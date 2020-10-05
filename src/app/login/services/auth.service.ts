import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  adminURL="/index.php/rest/V1/integration/admin/token";
  customerURL="/index.php/rest/default/V1/integration/customer/token";
  cartUrl="/index.php/rest/default/V1/carts/mine"

  constructor(private http: HttpClient) { }

  getAdminToken(credetial:{username:string,password:string}){
    return this.http.post(this.adminURL,credetial).pipe(
      map((result)=>{
        this.saveAdminToken(result)
        return result
      })
    )
  }

  getCustomerToken(credential:{username: string , password: string}){
    return this.http.post(this.customerURL,credential).pipe(
      map((token)=>{
          this.saveCustomerToken(token)
        return token;
      })
    )
  }

  magentoCartCreate(){
      
    const httphead =new HttpHeaders({
      'content-type':'application/json',
      'authorization':this.customerToken()
    });
    let token=this.customerToken();
    console.log(token);
    
   return this.http.post(this.cartUrl,httphead)
  }


  public saveAdminToken(result:any){
    localStorage.setItem('ACCESS_TOKEN', "Bearer "+ result); 
  }

  public saveCustomerToken(result: any){
    localStorage.setItem('CUSTOMER_TOKEN',"Bearer "+ result)
  }
  public adminToken(){
    return localStorage.getItem('ACCESS_TOKEN')
  }
  customerToken(){
    return localStorage.getItem('CUSTOMER_TOKEN')
  }


}
