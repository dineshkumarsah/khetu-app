import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import {ReactiveFormsModule} from '@angular/forms'
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ProductbyidComponent } from './productbyid/productbyid.component'
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CardProductComponent } from './card-product/card-product.component';
import { HeaderComponent } from './header/header.component';


import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule


} from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    LoginComponent,
    CustomerComponent,
    ProductbyidComponent,
    CustomerloginComponent,
    CardProductComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
   
  
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,MatInputModule,MatAutocompleteModule,MatChipsModule,MatFormFieldModule,Ng2SearchPipeModule,FormsModule,MatButtonModule,

    ToastrModule.forRoot({
      timeOut:5000
    }),
    NgbModule.forRoot(),
  
   
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomerloginComponent
  ]
})
export class AppModule { }
