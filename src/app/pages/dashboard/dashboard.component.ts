import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
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

  // console the text inside entered in search bar
  abc(input:string){
    console.log("msg in search bar",input);
  }

  signOut(): void {
    this.authService.signOut();
  }
  
  constructor(private authService: SocialAuthService, private service: CheckingService) { }


  ngOnInit(): void {
  }

}
