import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, AddressListComponent } from '../address-list/address-list.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss']
})

export class ChangeAddressComponent implements OnInit {
public userData:any={};
  constructor(    public dialogRef: MatDialogRef<AddressListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private data1:DataService) { }

  

  ngOnInit(){
    console.log(this.data.addressLine);
    
    // this.sub();
  }
  sub(){
    this.data1.listAdress().subscribe((data)=>{
      console.log(data);
    });
  }
// sub(){
//   this.data1.listAdress().subscribe((data)=>{
//     this.userData = data;
//     console.log(data)
//   });
// }
  // index = this.al.sendindex()
  // addressLine = this.userData.addressLine;
  // city = this.userData.city;
  // pincode = this.userData.pincode;
  // country = this.userData.country;

  AddressFormControl = new FormControl(this.data.addressLine, [
    Validators.required,
  ]);

  CityFormControl = new FormControl(this.data.city, [
    Validators.required,Validators.pattern('[a-zA-Z]{3,20}$')
  ]);

  PincodeFormControl = new FormControl(this.data.pincode, [
    Validators.required,Validators.pattern('[0-9]{6}$')
  ]);

  StateFormControl = new FormControl(this.data.state, [
    Validators.required,Validators.pattern('[a-zA-Z]{3,20}$')
  ]);

  CountryFormControl = new FormControl(this.data.country, [
    Validators.required,Validators.pattern('[a-zA-Z]{3,20}$')
  ]);

  onSubmit(
    addressLine: string,
    city: string,
    pincode: number,
    state: string,
    country: string,
  ) {
    // console.log(data );
    let editInfo = {
      addressLine: addressLine,
      city: city,
      state : state,
      pincode: pincode,
      country: country,
    };
    console.log(editInfo);
    this.data1.updateAddress(editInfo,this.data.id).subscribe((data)=>{
      console.log(data);
    });
    // this.data1.editItem(this.index,editInfo)
  }

  onNoClick(): void {
    this.dialogRef.close('true');
    this.sub();
  }
}
