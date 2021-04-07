import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CheckingService } from 'src/assets/services/checking.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild(MatAccordion) accordion: MatAccordion;

  name:string=this.service.data()
  cartValue:number=5
  panelOpenState = false;

  title = 'NeoStore';

  constructor(private authService: SocialAuthService, private service: CheckingService, private router: Router) { }


  ngOnInit(): void {
  }


  // console the text inside entered in search bar
  abc(input:string){
    console.log("msg in search bar",input);
  }

  signOut() {
    this.service.signOut();
  }
  
  // if user is logged in then only it will navigate to product page
  onProductClick(){
    // if(this.service.item){
      this.router.navigate(['/products']);
    // }
  }

  // if user is logged in then only it will navigate to order page
  onOrderClick(){
    if(this.service.item){
       this.router.navigate(['/order']);
    }
  }

  onCartClick(){
    if(this.service.item){
      this.router.navigate(['/cart']);
   }
  }

  onProfileClick(){
    if(this.service.item){
      this.router.navigate(['/profile']);
   }
  }
 
}
