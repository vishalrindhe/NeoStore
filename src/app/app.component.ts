import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CheckingService } from 'src/assets/services/checking.service';
import { DataService } from 'src/assets/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  // public url: string = 'http://ce61dbbabdca.ngrok.io';
  public xyz: any;
  name: any = localStorage.getItem('firstName');
  cartValue: number;
  // = this.data.cartValue
  panelOpenState = false;
  public token = this.data.token;
  public b: any;

  title = 'NeoStore';

  constructor(
    private authService: SocialAuthService,
    private service: CheckingService,
    private router: Router,
    private data: DataService,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    console.log('firstname: ', localStorage.getItem('firstName'));

    // start loader
    this.spinner.show();

    console.log('token form dashboard', this.token);

    //
    this.b = setInterval(() => {
      this.initData();
    }, 1000);

    if (!this.token) {
      console.log('token is unavailable');
      // clearInterval(this.b);
      this.pauseTimeLine();
    }
  }

  pauseTimeLine() {
    clearInterval(this.b);
    console.log('stopeed');
    this.spinner.hide();
  }

  /**
   * api call for length of products in cart
   * @memberof AppComponent
   */
  initData() {
    this.data.listProductsInCartGet().subscribe((info) => {
      this.data.cartValue = info?.data.products.length;
      this.cartValue! = info?.data.products.length;

      this.spinner.hide();
    });
  }

  abc(input: string) {
    console.log('msg in search bar', input);
  }

  /**
   *this signOut functin clear all localhost
   * and reload it
   * @memberof DashboardComponent
   */
  signOut() {
    localStorage.clear();
    location.reload();
  }

  // if user is logged in then only it will navigate to product page
  onProductClick() {
    this.router.navigate(['/products']);
  }

  // if user is logged in then only it will navigate to order page
  onOrderClick() {
    this.data.isProfile = false;
    this.data.isChangePassword = false;
    this.data.isAddress = false;
    this.data.isOrder = true;
    this.router.navigate(['/my-account']);
  }

  onCartClick() {
    this.router.navigate(['/cart']);
  }

  signIn() {
    this.router.navigate(['/login']);
  }
  /**
   * change values of varibale from dataService; so order page in switch case of myAccount page will selected and navigate to myaccount page
   * @memberof AppComponent
   */
  onProfileClick() {
    this.data.isProfile = true;
    this.data.isChangePassword = false;
    this.data.isAddress = false;
    this.data.isOrder = false;
    this.router.navigate(['/my-account']);
  }

  onHomeClick() {
    this.router.navigate(['/dashboard']);
  }
}
