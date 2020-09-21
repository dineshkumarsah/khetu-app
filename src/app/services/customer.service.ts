import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cutomer} from '../model/customer.model'
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
baseUrl="/index.php/rest/default/V1/integration/customer/token"

  constructor(private http: HttpClient) { }
  // getAllModule(){
  //   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem('ACCESS_TOKEN')) });
  //   return this.http.get(this.modulsUrl,{
  //     headers:{
  //       'authorization': this.getToken()
  //     }
  //   })


  // getCredential(credetial:{username:string,password:string}):Observable<User>{
  //   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.post<User>(this.postsURL,credetial).pipe(
  //     map((result)=>{
  //       return <User>result
  //     })
  //   )
  // }
 

  getCustomerToken(credential:{username: string , password: string}): Observable<User>{

    return this.http.post<User>(this.baseUrl,credential)

  }
   
  cutomerRestration(customer: any){
    return this.http.post(this.baseUrl,customer);
  }
}
