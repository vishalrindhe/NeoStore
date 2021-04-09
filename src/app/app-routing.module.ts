import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/assets/services/auth.guard';
import { AddressComponent } from './pages/address/address.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RateProductComponent } from './pages/rate-product/rate-product.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'cart' ,  canActivate : [AuthGuard] ,component:CartComponent},
  {path:'profile' , canActivate : [AuthGuard] , component:ProfileComponent},
  {path:'products' , canActivate : [AuthGuard] , component:ProductsComponent},
  {path:'order' , canActivate : [AuthGuard] , component:OrderComponent},
  {path:'productInfo' , canActivate : [AuthGuard] , component:ProductInfoComponent},
  {path:'rateproduct' , canActivate : [AuthGuard] , component:RateProductComponent},
  {path:'address' , canActivate : [AuthGuard] , component:AddressComponent},
  {path:'changepassword' , canActivate : [AuthGuard] , component:ChangePasswordComponent},
  {path:'orderdetails' , canActivate : [AuthGuard] , component:OrderDetailsComponent},
  {path:'invoice' , canActivate : [AuthGuard] , component:InvoiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,RegistrationComponent,DashboardComponent]