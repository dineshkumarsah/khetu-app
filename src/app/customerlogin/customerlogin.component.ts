import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import { AdminComponent } from '../admin/admin.component';
import { ViewChild } from '@angular/core';
import {ProductbyidService} from 'src/app/services/productbyid.service'


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit , OnDestroy {
  @Input() id: number;
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  myForm: FormGroup;
  customerloginToken: any;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private customerService: CustomerService,
    private authService:AuthService, private router: Router,private componentFactoryResolver: ComponentFactoryResolver,
    private productbyidService: ProductbyidService) {
    this.createForm();
  }

  ngOnInit() {
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  getCutomerToken() {
    debugger

    let credential = {
      "username": this.myForm.value.username,
      "password": this.myForm.value.password

    }
    this.customerService.getCustomerToken(credential).subscribe({
      next: (result) => {
        this.customerloginToken = result
        console.log(this.customerloginToken);
       
        this.activeModal.close('Modal Closed');
      
    this.productbyidService.getProductByid("4").subscribe(
      (result)=>{
        console.log(result);
        
      }
    )
 

      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
    this.customerService.loginObservable.subscribe({
      next:(r)=>{
       
        
      }
    })
    
   
  }

  // closeModal() {
   
  //   if(localStorage.getItem('customer')){
  //     this.activeModal.close('Modal Closed');
  //   }
   
  // }
  ngOnDestroy(){
   
  
  }
}
