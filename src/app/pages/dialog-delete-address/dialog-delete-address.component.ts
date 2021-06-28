import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/assets/services/data.service';
import {
  AddressListComponent,
  DialogData,
} from '../address-list/address-list.component';
// import { DialogData } from '../cart/cart.component';

@Component({
  selector: 'app-dialog-delete-address',
  templateUrl: './dialog-delete-address.component.html',
  styleUrls: ['./dialog-delete-address.component.scss'],
})
export class DialogDeleteAddressComponent implements OnInit {
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
   * it will list out addresses from api
   * @memberof DialogDeleteAddressComponent
   */
  sub() {
    this.data1.listAdress().subscribe((data) => {
      console.log(data);
    });
  }
  /**
   * if user click delete from doalog box then it will pass address _id ti api to delete address
   * @memberof DialogDeleteAddressComponent
   */
  onSubmit() {
    // dlete address api call
    this.data1.deleteAddress(this.data.id).subscribe((data) => {
      this.data1.listAdress().subscribe((data) => {
        console.log(data);
      });
      console.log('deleted from delete dialog', data);
    });
  }

  onNoClick() {
    this.dialogRef.close('true');
    this.sub();
  }
}
