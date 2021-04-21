import { Component, OnInit } from '@angular/core';
// import { ProfileDataService } from '../../../assets/services/profile-data.service';
// import {MatDialog} from '@angular/material/dialog';
// import { DialogueProfileComponent } from '../dialogue-profile/dialogue-profile.component';
import { ProfileComponent } from '../profile/profile.component'
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { AddressComponent } from '../address/address.component';
import { OrderComponent } from '../order/order.component';
import { DataService } from 'src/assets/services/data.service';

export interface DialogData {
  [x: string]: any;
  animal: string;
  name: string;
  }

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})

export class MyAccountComponent implements OnInit {

  profile:any=[]
  name: any;
  animal: any;
  isProfile=true;
  isChangePassword=false;
  isAddress=false;
  isOrder=false;
  key=1;

  constructor(private service:DataService) { }

  ngOnInit(){
    this.profile = this.service.getUserProfile();
    console.log(this.profile);
  }
  
  change(key:number){
    if (key===1){
      this.isProfile=true;
      this.isChangePassword=false;
      this.isAddress=false;
      this.isOrder=false;
    }
    if (key===2){
      this.isProfile=false;
      this.isChangePassword=true;
      this.isAddress=false;
      this.isOrder=false;
    }
    if (key===3){
      this.isProfile=false;
      this.isChangePassword=false;
      this.isAddress=true;
      this.isOrder=false;
    }
    if(key===4){
      this.isProfile=false;
      this.isChangePassword=false;
      this.isAddress=false;      
      this.isOrder=true;
    }
  }
}