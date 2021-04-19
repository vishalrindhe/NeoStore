import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';
import { CartComponent, DialogData } from '../cart/cart.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  ngOnInit(): void {
// this.onNoClick()
// this.onOkClick()
  }
  onNoClick(): void {
    // this.data1.setRemoveCart("false")
    this.dialogRef.close('false');
  }

  onOkClick() {
    // this.data1.setRemoveCart("true")
    this.dialogRef.close('true');
  }

}
