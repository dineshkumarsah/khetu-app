import {HttpInterceptor, HttpRequest,HttpHandler} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import {AuthService} from 'src/app/login/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injector:Injector ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let auth = this.injector.get(AuthService)
   let tokenizeReq = req.clone({
     setHeaders:{
       Authorization: auth. adminToken()
     }
   })
   return next.handle(tokenizeReq)
  }
}
