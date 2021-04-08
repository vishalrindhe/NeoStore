import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

export interface PeriodicElement {
  field: string;
  data: any;
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

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log(this.userData);
    
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
}
