import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';
import { CartComponent, DialogData } from '../cart/cart.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss'],
})
export class DialogCartComponent implements OnInit {
  // getting product image and product name from cart component
  constructor(
    public dialogRef: MatDialogRef<DialogCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  // if user dont want to delete product then function will pass false value
  onNoClick(): void {
    this.dialogRef.close('false');
  }

  // if user  want to delete product then function will pass true value
  onOkClick() {
    this.dialogRef.close('true');
  }
}
