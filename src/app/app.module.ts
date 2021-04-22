import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { FooterComponent } from './pages/footer/footer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomepageCardComponent } from './pages/homepage-card/homepage-card.component';

import { RatingModule } from 'ng-starrating';
import { LoginComponent } from './pages/login/login.component'

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,  FacebookLoginProvider} from 'angularx-social-login';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrderComponent } from './pages/order/order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
// import {ShareModule} from 'ng2share/share.module'

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareModule } from 'ngx-sharebuttons';

// image zoom
// import { NgxImgZoomModule  } from 'ngx-img-zoom';
// import { NgMagnizoomModule } from 'ng-magnizoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RateProductComponent } from './pages/rate-product/rate-product.component';
import { AddressComponent } from './pages/address/address.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { DialogProfileComponent } from './pages/dialog-profile/dialog-profile.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

// custom validator

// paginator
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogCartComponent } from './pages/dialog-cart/dialog-cart.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { ChangeAddressComponent } from './pages/change-address/change-address.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { SortPipe } from './pipes/sort.pipe'; // <-- import the module

// http
 import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegistrationComponent,
    HomepageCardComponent,
    LoginComponent,
    CarouselComponent,
    DashboardComponent,
    routingComponents,
    ProductsComponent,
    OrderComponent,
    ProfileComponent,
    CartComponent,
    ProductInfoComponent,
    RateProductComponent,
    AddressComponent,
    ChangePasswordComponent,
    OrderDetailsComponent,
    InvoiceComponent,
    DialogProfileComponent,
    DialogCartComponent,
    FilterPipe,
    FilterColorPipe,
    ChangeAddressComponent,
    CheckoutComponent,
    ForgetPasswordComponent,
    MyAccountComponent,
    ThankYouComponent,
    SortPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    
    RatingModule,
    SocialLoginModule,
    // ShareModule ,
    ShareButtonsModule,
    ShareIconsModule ,
    FontAwesomeModule,
    ShareModule,
    // NgMagnizoomModule
    // NgxImgZoomModule
    PinchZoomModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxImageZoomModule,
    NgxPaginationModule,

    // http
    HttpClientModule
    
    ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '36798735464-gn4v96ut2u7bobb7idabnnn5138k4p86.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1764853540358961')
          }
        ]
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
