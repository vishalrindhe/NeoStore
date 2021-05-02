import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  DialogData,
  AddressListComponent,
} from '../address-list/address-list.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddressListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private data1: DataService
  ) {}
  public userData: any = {};
  ngOnInit(): void {
    this.sub();
  }

  /**
   * this method gets all address data from api for particular user
   * @memberof AddAddressComponent
   */
  sub() {
    this.data1.listAdress().subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

  addressLine = this.userData.addressLine;
  city = this.userData.city;
  pincode = this.userData.pincode;
  country = this.userData.country;

  /**
   * required validation for input address line
   * @memberof AddAddressComponent
   */
  AddressFormControl = new FormControl(this.addressLine, [Validators.required]);

  /**
   * required and 3-20 alphabet validation for input city
   * @memberof AddAddressComponent
   */
  CityFormControl = new FormControl(this.city, [
    Validators.required,
    Validators.pattern('[a-zA-Z]{3,20}$'),
  ]);

  /**
   * 6 digit number validation for input pincode
   * @memberof AddAddressComponent
   */
  PincodeFormControl = new FormControl(this.pincode, [
    Validators.required,
    Validators.pattern('[0-9]{6}$'),
  ]);

  /**
   * required and 3-20 alphabet validation for input state
   * @memberof AddAddressComponent
   */
  StateFormControl = new FormControl(this.country, [
    Validators.required,
    Validators.pattern('[a-zA-Z]{3,20}$'),
  ]);

  /**
   * required and 3-20 alphabet validation for input country
   * @memberof AddAddressComponent
   */
  CountryFormControl = new FormControl(this.country, [
    Validators.required,
    Validators.pattern('[a-zA-Z]{3,20}$'),
  ]);

  /**
   * accepts input from input fields and creates editInfo object and send it ti the api
   * @param {string} addressLine
   * @param {string} city
   * @param {number} pincode
   * @param {string} state
   * @param {string} country
   * @memberof AddAddressComponent
   */
  onSubmit(
    addressLine: string,
    city: string,
    pincode: number,
    state: string,
    country: string
  ) {
    // console.log(data );
    let editInfo = {
      addressLine: addressLine,
      city: city,
      state: state,
      pincode: pincode,
      country: country,
    };
    console.log(editInfo);
    this.data1.addAddress(editInfo).subscribe((data) => {
      console.log(data);
      this.sub();
    });
    // this.data1.editItem(this.index,editInfo)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
