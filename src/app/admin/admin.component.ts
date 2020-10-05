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
  cart_Id: any;

  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal, private product: ProductbyidService,
    private customerService: CustomerService,
    private cartService: CartService,
    private url: UrlService) { }

  ngOnInit() {
    this.createMagentoCart();

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
 

      modalRef.componentInstance.id = 10; // should be the id
  

      modalRef.result.then((result) => {
    
      }).catch((error) => {
  
      });
    }

  }

  getAllProducts(url: string) {
    
   
    this.product.getProductByid(url).subscribe({
      next: (result) => {
      

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
    
        this.itemOfNumber=Object.keys(res).length
        
      },
      error: (error)=>{
     
       
      }

    })
  }

  // getProductByid(id: string){

  //   this.product.getProductByIdSchema(id).subscribe({
  //     next : (res)=>{
  //  
        
  //     },
  //     error: (res: HttpErrorResponse)=>{
  //    
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
      
        
      }
    })
  }
  login(){
    this.router.navigate(['login'])
  }

  createMagentoCart(){
    debugger
    this.cartService.magentoCartCreate().subscribe({
      next: (res:{id:string})=>{
        this. cart_Id=res.id
        console.log("dk",res.id);
        console.log(res);
        
        
      
        
      },
      error: (error: HttpErrorResponse)=>{
      
         
      }
    });
  }

  ngOnDestroy() {
    // localStorage.removeItem("cart")
  }
}
