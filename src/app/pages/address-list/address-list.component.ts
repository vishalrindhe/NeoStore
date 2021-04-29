import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeAddressComponent } from '../change-address/change-address.component';

import { AddAddressComponent } from '../add-address/add-address.component';
import { DataService } from 'src/assets/services/data.service';
import { DialogDeleteAddressComponent } from '../dialog-delete-address/dialog-delete-address.component';
import { NgxSpinnerService } from 'ngx-spinner';

export interface DialogData {
  addressLine: any;
  pincode: any;
  city: any;
  state: any;
  country: any;
  id: string;
}

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  public address_list: any = [];
  name: any;
  animal: any;
  address: any;
  city: any;
  state: any;
  pincode: any;
  country: any;
  id: string = '';
  public addresses: any = [];
  constructor(public dialog: MatDialog, private data: DataService,private spinner: NgxSpinnerService ) {}

  ngOnInit(): void {
    this.receivedata();
  }

  receivedata() {
    this.spinner.show();
    this.data.listAdress().subscribe((data) => {
      this.address_list = data;
      console.log(this.address_list.data.address);
      this.addresses = this.address_list.data.address;
      this.spinner.hide();
    });
    // this.address_list = this.address_service.senddata();
  }

  // sendindex(i:number){

  // }

  del_address(id: string) {
    this.data.deleteAddress(id).subscribe((data) => {
      console.log(data);
      this.receivedata();
    });
  }

  // edit_address(i:number){
  //   this.address_service.editItem(i);
  // }
  // onclick(addressLine:string , city:string , pincode:number ,state:string , country:string ,id:string){

  // }
  openDialog(
    addressLine: string,
    city: string,
    pincode: number,
    state: string,
    country: string,
    id: string
  ): void {
    const dialogRef = this.dialog.open(ChangeAddressComponent, {
      width: '60vh',
      data: {
        addressLine: addressLine,
        city: city,
        pincode: pincode,
        state: state,
        country: country,
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.receivedata();
    });
    // this.sendindex(i);
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      width: '60vh',
      data: {
        addressLine: this.address,
        pincode: this.pincode,
        city: this.city,
        state: this.state,
        country: this.country,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.receivedata();
    });
    // this.sendindex(i);
  }
  openDialogForDelete(
    addressLine: string,
    city: string,
    pincode: number,
    state: string,
    country: string,
    id: string
  ): void {
    const dialogRef = this.dialog.open(DialogDeleteAddressComponent, {
      width: '60vh',
      data: {
        addressLine: addressLine,
        city: city,
        pincode: pincode,
        state: state,
        country: country,
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.data.listAdress().subscribe((data) => {
        this.address_list = data;
        console.log(this.address_list.data.address);
        this.addresses = this.address_list.data.address;
      });
      console.log('deleted and closed');

      setTimeout(() => {
        console.log('1');

        this.receivedata();
      }, 3000);
    });
    console.log('2');

    this.receivedata();
    // this.sendindex(i);
  }
}
