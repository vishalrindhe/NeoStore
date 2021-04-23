import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/assets/services/auth.guard';
import { AddressComponent } from './pages/address/address.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChangeAddressComponent } from './pages/change-address/change-address.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RateProductComponent } from './pages/rate-product/rate-product.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

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
  {path:'productInfo/:_id' , canActivate : [AuthGuard] , component:ProductInfoComponent},
  {path:'rateproduct' , canActivate : [AuthGuard] , component:RateProductComponent},
  {path:'address' , canActivate : [AuthGuard] , component:AddressComponent},
  
  {path:'orderdetails' , canActivate : [AuthGuard] , component:OrderDetailsComponent},
  {path:'invoice' , canActivate : [AuthGuard] , component:InvoiceComponent},

  {path:'my-account' , canActivate : [AuthGuard] , component:MyAccountComponent},
  // {path:'invoice' , canActivate : [AuthGuard] , component:},
  {path:'invoice' , canActivate : [AuthGuard] , component:InvoiceComponent},

  {path: 'change-password', canActivate : [AuthGuard] , component:ChangePasswordComponent},
  {path: 'change-address', canActivate : [AuthGuard] , component:ChangeAddressComponent},
  {path: 'thank-you',  component:ThankYouComponent },
  {path: 'forget-password', canActivate : [AuthGuard] , component:ForgetPasswordComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,RegistrationComponent,DashboardComponent]