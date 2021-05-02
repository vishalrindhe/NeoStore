import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CheckingService } from 'src/assets/services/checking.service';
import { DataService } from 'src/assets/services/data.service';
import { NgxSpinnerService } from "ngx-spinner";

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
    private spinner: NgxSpinnerService  ) {}

  ngOnInit() {
    console.log('firstname: ', localStorage.getItem('firstName'));
    this.spinner.show();

    // this.data.listProductsInCartGet().subscribe((info) => {
    //   this.data.cartValue = info?.data?.products?.length;
    //   // this.cartValue = this.data.cartValues
    //   this.cartValue! = info.data.products.length;
    //   console.log(this.cartValue);
    // })

    console.log('token form dashboard', this.token);

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

  initData() {
    // this.spinner.show();

    this.data.listProductsInCartGet().subscribe((info) => {
      this.data.cartValue = info?.data.products.length;
      // this.cartValue = this.data.cartValues
      this.cartValue! = info?.data.products.length;
      // console.log(this.cartValue);
      // this.token = localStorage.getItem('token')
      // console.log("this.token",this.token);
      this.spinner.hide();

    });
  }

  // public count = this.cartCount.getCartCount();

  // console the text inside entered in search bar
  abc(input: string) {
    console.log('msg in search bar', input);
  }

  /**
   *this signOut functin clear all localhost
   * and reload it
   * @memberof DashboardComponent
   */
  signOut() {
    // this.service.signOut();
    localStorage.clear();
    // this.router.navigate(['/dashboard']);
    location.reload();
  }

  // if user is logged in then only it will navigate to product page
  onProductClick() {
    // if(this.service.item){
    this.router.navigate(['/products']);
    // }
  }

  // if user is logged in then only it will navigate to order page
  onOrderClick() {
    // if(this.service.item){
    this.data.isProfile = false;
    this.data.isChangePassword = false;
    this.data.isAddress = false;
    this.data.isOrder = true;
    this.router.navigate(['/my-account']);
    // }
  }

  onCartClick() {
    // if(this.service.item){
    this.router.navigate(['/cart']);
    //  }
  }

  signIn() {
    // if(this.service.item){
    this.router.navigate(['/login']);
    //  }
  }
/**
 * change values of varibale from dataService; so order page in switch case of myAccount page will selected and navigate to myaccount page
 * @memberof AppComponent
 */
onProfileClick() {
    // if(this.service.item){
    this.data.isProfile = true;
    this.data.isChangePassword = false;
    this.data.isAddress = false;
    this.data.isOrder = false;
    this.router.navigate(['/my-account']);
    //  }
  }

  onHomeClick(){
    this.router.navigate(['/dashboard']);
  }
}
