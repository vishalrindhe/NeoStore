import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface PeriodicElement {
  field: string;
  data: any;
}

export interface DialogData {
  [x: string]: any;
  animal: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { field: 'Hydrogen', data: 'H'}, 

];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private data: DataService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    console.log(this.userData);
    
  }

  animal: string;
  name: string;

  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProfileComponent, {
      width: 'auto',
      data: {name: this.name, animal: this.animal}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }



  public userData = this.data.getUserProfile()

  public dataS: PeriodicElement[]=[
        {field:"First Name",data:this.userData.customer_proile.first_name},
        {field:"Last Name",data:this.userData.customer_proile.last_name},
        {field:"Gender",data:this.userData.customer_proile.gender},
        {field:"Date Of Birth",data:this.userData.customer_proile.dob},
        {field:"Mobile Number",data:this.userData.customer_proile.phone_no},
        {field:"Email",data:this.userData.customer_proile.email},
]

displayedColumns: string[] = ['field','data'];
dataSource = ELEMENT_DATA;


onOrderClick(){
  this.router.navigate(['/order']);
}

onProfileClick(){
  this.router.navigate(['/profile']);
}

onAddressClick(){
  this.router.navigate(['/address']);
}

onChangePasswordClick(){
  this.router.navigate(['/changepassword']);
}

}
