import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  postsURL="/index.php/rest/V1/integration/admin/token";
  modulsUrl="/index.php/rest/V1/modules"
  
  constructor(private http: HttpClient ) { }

  getCredential(credetial:{username:string,password:string}):Observable<User>{
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<User>(this.postsURL,credetial).pipe(
      map((result)=>{
        return <User>result
      })
    )
  }
  public signIn(userData: User){
   
    localStorage.setItem('ACCESS_TOKEN', "Bearer "+ userData);
   
    
  }
  setCustomerLoginToken(customerToken:string){
    localStorage.setItem('customerToken',customerToken)
  }
  getCustomerLoginToken(){
    return localStorage.getItem('customerToken')!==null;
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public isCustomerLoggedIn(){
    return localStorage.getItem('customerToken') !== null;
  }

  public logout(){
    localStorage.removeItem('customerToken')
    localStorage.removeItem('ACCESS_TOKEN');
  }
  getToken(){
    return localStorage.getItem('ACCESS_TOKEN')
  }

  getAllModule(){
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem('ACCESS_TOKEN')) });
    return this.http.get(this.modulsUrl,{
      headers:{
        'authorization': this.getToken()
      }
    })
    
  }
}