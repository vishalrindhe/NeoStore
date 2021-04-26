import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, AddressListComponent } from '../address-list/address-list.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/assets/services/data.service';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddressListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private data1:DataService) { }
    public userData:any={};
    ngOnInit(): void {
      this.sub();
    }
  
  sub(){
    this.data1.listAdress().subscribe((data)=>{
      // let needdata = data;
      this.userData = data;
      console.log(this.userData);
      
    });
  }

  addressLine = this.userData.addressLine;
  city = this.userData.city;
  pincode = this.userData.pincode;
  country = this.userData.country;

  AddressFormControl = new FormControl(this.addressLine, [
    Validators.required,
  ]);

  CityFormControl = new FormControl(this.city, [
    Validators.required,Validators.pattern('[a-zA-Z]{3,20}$')
  ]);

  PincodeFormControl = new FormControl(this.pincode, [
    Validators.required,Validators.pattern('[0-9]{6}$')
  ]);

  StateFormControl = new FormControl(this.country, [
    Validators.required,Validators.pattern('[a-zA-Z]{3,20}$')
  ]);

  CountryFormControl = new FormControl(this.country, [
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
    this.data1.addAddress(editInfo).subscribe((data) =>{
      console.log(data);
      this.sub();
    })
    // this.data1.editItem(this.index,editInfo)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
