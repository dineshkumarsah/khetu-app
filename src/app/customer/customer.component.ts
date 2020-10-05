import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms'
import { Cutomer } from '../model/customer.model';
import {CustomerService} from '../services/customer.service'
import { HttpErrorResponse } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cutomerForm: FormGroup;
  ErrorMessage:string;
  ht:boolean=false;

  constructor(private fb: FormBuilder,private customerServices: CustomerService,private toastrService: ToastrService,
    private router:Router ) { }

  ngOnInit() {
    this.cutomerForm = this.fb.group({
      "customer": this.fb.group({
        "email": [''],
        "firstname": [''],
        "lastname": [''],
        "password":['']
      }),
      "addresses": this.fb.group({
        'defaultShipping': [''],
        'defaultBilling': [''],
        'firstname': [''],
        "lastname": [''],
        "region": this.fb.group({
          "regionCode": [''],
          "region": [''],
          "regionId": ['']
        }),
        "postcode": [''],
        "street": [''],
        "city": [''],
        "telephone": [''],
        "countryId": ['']
      }),

    })
  }

  getCustomerData() {

   
    let customer = {
      "customer": {
        "email": this.cutomerForm.controls.customer.value.email,
        "firstname": this.cutomerForm.controls.customer.value.firstname,
        "lastname": this.cutomerForm.controls.customer.value.lastname,
        "password": this.cutomerForm.controls.customer.value.password
      },
      "addresses": [
        {
          "defaultShipping": this.cutomerForm.controls.addresses.value.defaultShipping,
          "defaultBilling": this.cutomerForm.controls.addresses.value.defaultShipping,
          "firstname": this.cutomerForm.controls.addresses.value.firstname,
          "lastname": this.cutomerForm.controls.addresses.value.lastname,
          "region": {
            "regionCode":this.cutomerForm.controls.addresses.value.region.regionCode,
            "region":this.cutomerForm.controls.addresses.value.region.region,
            "regionId": this.cutomerForm.controls.addresses.value.region.regionId
          },
          "postcode":this.cutomerForm.controls.addresses.value.postcode,
          "street":this.cutomerForm.controls.addresses.value.street,
          "city":this.cutomerForm.controls.addresses.value.city,
          "telephone": this.cutomerForm.controls.addresses.value.telephone,
          "countryId": this.cutomerForm.controls.addresses.value.countryId
        }
      ]
    }

    let cu2={
      "customer":{
        "email": this.cutomerForm.controls.customer.value.email,
        "firstname": this.cutomerForm.controls.customer.value.firstname,
        "lastname": this.cutomerForm.controls.customer.value.lastname,
          "websiteId":"1",
          "addresses":[
              {
                  "customer_id":"1",
                  "firstname": this.cutomerForm.controls.addresses.value.firstname,
                  "lastname": this.cutomerForm.controls.addresses.value.lastname,
                  "company":"ABC Manufacturing",
                  "city":this.cutomerForm.controls.addresses.value.city,
                   "telephone": this.cutomerForm.controls.addresses.value.telephone,
                  "region":"Massachusetts",
                  "postcode":this.cutomerForm.controls.addresses.value.postcode,
                 
                  "country_id":this.cutomerForm.controls.addresses.value.countryId,
                  "street":[
                    this.cutomerForm.controls.addresses.value.street
                  ]
              }
          ]
      },
       "password": this.cutomerForm.controls.customer.value.password
      }
      
    




    this.customerServices.cutomerRestration(cu2).subscribe({
      next: (result:{id:string})=>{
      
        if(result.id){
          this.router.navigate(['admin'])
        } 
      },
      
      error: (error:HttpErrorResponse)=>{
        
        this.ErrorMessage=error.error.message;
        
        
      }
    })
  }
  // openToastr(){
  //   this.toastrService.success('everything is broken', 'Major Error');
  // }

}
