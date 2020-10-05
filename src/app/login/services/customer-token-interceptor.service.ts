
import {HttpInterceptor, HttpRequest,HttpHandler} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import {AuthService} from 'src/app/login/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class CustomerTokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizeReq
    console.log(req.url)
    if(req.url=="/index.php/rest/default/V1/carts/mine"||req.url=="/index.php/rest/default/V1/carts/mine/items"){
      let auth = this.injector.get(AuthService)
       tokenizeReq = req.clone({
        setHeaders:{
          Authorization: auth.customerToken()
        }
      })
    }else{
      let auth = this.injector.get(AuthService)
       tokenizeReq = req.clone({
        setHeaders:{
          Authorization: auth.adminToken()
        }
      })
    }


   return next.handle(tokenizeReq)
  }
}
