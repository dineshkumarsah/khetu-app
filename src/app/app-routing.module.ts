import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';
import { CartComponent } from './cart/cart.component';
import { MagentocartComponent } from './magentocart/magentocart.component';

const routes: Routes = [


  { path: '', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },


  // { path: '', pathMatch: 'full', redirectTo: 'admin' },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // { path: 'auth', component: AuthComponent },
  // {
  //   path: 'admin', component: AdminComponent,
  //   children: [
  //     { path: 'cart', component: MagentocartComponent },

  //   ]
  // },
  // { path: 'customer', component: CustomerComponent, },
  // { path: "product", component: ProductbyidComponent, },
  // { path: "cart", component: CartComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
