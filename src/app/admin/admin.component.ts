import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerloginComponent } from "../customerlogin/customerlogin.component";
import { ProductbyidService } from '../services/productbyid.service'
import { Product } from '../model/product';
import { UrlService } from '../services/url.service'
import {CartService} from 'src/app/services/cart.service'
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'
  ]
})
export class AdminComponent implements OnInit, OnDestroy {

  modules: any;
  term: string;
  productsArray: Product[] = [];
  customerToken: boolean = false;
  showLogin: boolean;
  showLogOut: string;
  itemOfNumber: number=0;
  islogin: boolean=false;

  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal, private product: ProductbyidService,
    private customerService: CustomerService,
    private cartService: CartService,
    private url: UrlService) { }

  ngOnInit() {

    this.getAuthToken()
    this.customerService.loginObservable.subscribe({
      next: (result)=>{
      
        
        let token="hdvfhwvfvfwhfvwsfwf"
        if(localStorage.getItem('token')){

          this.getVegetable()
          this.getFruits();
          this.islogin=true
        }else{

        }
       
      }
    })
   

  
  
    this. getCartObservable()

  }
  

  logout() {
    this.authService.logout();
    this.customerService.loginObservable.subscribe({
      next:()=>{
        this.islogin=false
      }
    })
    this.router.navigateByUrl('/login');
  }

  getModule() {
    this.authService.getAllModule().subscribe({
      next: (result) => {
        this.modules = result

      },
      error: (error) => {
        console.log(error);

      }
    }

    )
  }

  cretateCustomer() {
    alert("hi")
    this.router.navigateByUrl('/customer');
  }
  viewProduct() {
    this.router.navigateByUrl('/product');
  }
  openFormModal() {
    if (!localStorage.getItem('customerToken')) {
      const modalRef = this.modalService.open(CustomerloginComponent);
      console.log("modalRef->", modalRef);

      modalRef.componentInstance.id = 10; // should be the id
      console.log(modalRef);

      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log("model error", error);
      });
    }

  }

  getAllProducts(url: string) {
   
    this.product.getProductByid(url).subscribe({
      next: (result) => {
        console.log("----------------------->",result);

        this.productsArray = result
      }
    });

  }

  getFruits() {

    let url = this.url.getNewUrl("4")
    this.getAllProducts(url)

  }

  getVegetable() {

    let url = this.url.getNewUrl("3");
    this.getAllProducts(url)

  }

  getCartObservable(){
    debugger
    
    this.cartService.getCartObservable.subscribe({
      next: (res)=>{
        console.log(res);
        this.itemOfNumber=Object.keys(res).length
        
      },
      error: (error)=>{
       console.log(error);
       
      }

    })
  }

  // getProductByid(id: string){
  //   debugger;
  //   this.product.getProductByIdSchema(id).subscribe({
  //     next : (res)=>{
  //       console.log("get product by id--->:",res);
        
  //     },
  //     error: (res: HttpErrorResponse)=>{
  //       console.log("get product by id--->:",res);
  //     }
  //   });
  // }
  roteThisCart(){
   
    this.router.navigateByUrl('/cart');
  }

  getAuthToken(){
    let credential = {
      "username": "dinesh",
      "password": "Dsah@1234"
    }
    this.authService.getCredential(credential).subscribe({
      next: (res)=>{
        console.log(res);
        
      }
    })
  }
  login(){
    this.router.navigate(['login'])
  }

  ngOnDestroy() {
    localStorage.removeItem("cart")
  }
}
