import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerloginComponent } from "../customerlogin/customerlogin.component";
import { ProductbyidService } from '../services/productbyid.service'
import { Product } from '../model/product';
import { UrlService } from '../services/url.service'

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
  showLogOut: string

  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal, private product: ProductbyidService,
    private url: UrlService) { }

  ngOnInit() {
    this.getModule();
    this.openFormModal()
    this.getFruits();
    this.getVegetable();
    this.showLogin = this.authService.isCustomerLoggedIn()

  }

  logout() {
    this.authService.logout();
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
        console.log(result);

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

  ngOnDestroy() {
    localStorage.removeItem("customerToken")
  }
}
