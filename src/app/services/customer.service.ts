import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cutomer} from '../model/customer.model'
import { BehaviorSubject, Observable } from 'rxjs';
import {} from 'rxjs'
import { User } from '../user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
baseUrl="/index.php/rest/default/V1/integration/customer/token"
_observable: BehaviorSubject<Object>

  constructor(private http: HttpClient) { 
    this._observable=new BehaviorSubject({});
  }
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
  get loginObservable(){
    return this._observable
  }
 

  getCustomerToken(credential:{username: string , password: string}):Observable<User>{

    return this.http.post<User>(this.baseUrl,credential).pipe(
      map((token)=>{
       
          this.setToken(token)
          
     
        // this._observable.next({"dinesh":26})
        return <User>token;
      })
    )

  }
   
  cutomerRestration(customer: any){
    let url="/index.php/rest/default/V1/customers"
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    return this.http.post(url,customer);
  }
  
  setToken(token:User){
    localStorage.setItem('token',"Bearer "+ token)
  }
  removeToken(){
    localStorage.removeItem('token')
  }
  CustomerTokens(){
    return localStorage.getItem('token')
  }
}
