import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CheckingService } from 'src/assets/services/checking.service';
import { DataService } from 'src/assets/services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // let url = `${this.apiRoot}/get`;
  // this.http.get(url).subscribe(res => console.log(res.text())); (1)

  @ViewChild(MatAccordion) accordion: MatAccordion;

  // public url: string = 'http://ce61dbbabdca.ngrok.io';
  public xyz:any
  name: any = localStorage.getItem("firstName")
  cartValue: number
  // = this.data.cartValue
  panelOpenState = false;
  public token:any
  public b:any



  title = 'NeoStore';

  constructor(
    private authService: SocialAuthService,
    private service: CheckingService,
    private router: Router,
    private data: DataService,
    private http: HttpClient

  ) {}

  ngOnInit(){
     console.log("firstname: ",localStorage.getItem("firstName"));
    
      // if(this.token != null){
        // this.interval()
    // this.b = this.interval()
      // }
     
      
    
      this.b = setInterval(() =>{ 
        this.data.listProductsInCartGet().subscribe((info) =>{
          this.data.cartValue = info.data.products.length
          // this.cartValue = this.data.cartValue
          this.cartValue! = info.data.products.length
          console.log(this.cartValue);  
          this.token = localStorage.getItem('token')
          console.log(this.token);
          
        })}, 3000);

        if(this.token == null){
        }

        setTimeout(() => {
          // this.pauseTimeLine()
        }, 5000);

      
  }

  pauseTimeLine() {
    clearInterval(this.b);
    console.log("stopeed");
    
    
}

  // interval(){
    
  // }

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
    localStorage.clear()
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
    this.router.navigate(['/order']);
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

  onProfileClick() {
    // if(this.service.item){
    this.router.navigate(['/my-account']);
    //  }
  }
}
