import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from 'src/assets/services/data.service';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';
// import {} from '../../../assets/services/data.service'


export interface DialogData {
  name: string;
  img:any
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  @Input() quantity = Array();
  @Input() subTotal: number = 0;
  public x = 0;
  public cartData = this.data.getCartData();
  public price = this.cartData.product_details[0].product_cost;
  public total = this.cartData.product_details[0].total_productCost;
  // public quantity = this.cartData.product_details[this.i].quantity;
  public stock = this.cartData.product_details[0].product_id.product_stock;
  name: any;
  animal: any;

  constructor(private data: DataService, public dialog: MatDialog) {}
  total2: number;
  ngOnInit() {
    // trying to share quantity to dataservice
    this.data.setCartCount(this.cartData.product_details[0].quantity);
    console.log(this.quantity);
    console.log(this.quantity[1]);

    // adding quantities to quantoty Array
    for (let j of this.cartData.product_details) {
      this.quantity[this.x] = j.quantity;
      this.x = this.x + 1;
    }
    console.log('x:', this.x);

    // here calculating subtotal of all product by taking index id of array from quantity array
    // and multiply with its respective product price and add them one by one from for loop
    let j = this.quantity.length;
    console.log('array length', this.quantity.length);
    let subTotal1: number = 0;
    for (let y = 0; y < j; y++) {
      subTotal1 =
        subTotal1 +
        this.quantity[y] * this.cartData.product_details[y].product_cost;
      this.subTotal = subTotal1;
      console.log('subtotal', this.subTotal);
    }
  }
  /**
   * here dialog box will open on delete product click
   * if user click remove then it will return true else false and from that basis it will slice the array of products
   * @param {number} i
   * @memberof CartComponent
   */
  openDialog(i: number) {
    let xyz: string = '';
    const dialogRef = this.dialog.open(DialogCartComponent, {
      width: '50vh',
      data: {name: this.cartData.product_details[i].product_id.product_name,
        img: this.cartData.product_details[i].product_id.product_image}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('result', result);
      // this.abcd = result
      xyz = result;

      if (xyz == 'true') {
        if (this.quantity.length == 1) {
          console.log('length true');
          this.subTotal = 0;
        }
        console.log('array length before splicing', this.quantity.length);
        console.log('quantity array before splicing', this.quantity);
        this.quantity[i] = this.quantity[i];
        this.quantity.splice(i, 1);
        console.log('i inside delete click', i);
        console.log('array quantity', this.quantity);
        this.cartData.product_details.splice(i, 1);
        console.log('product json', this.cartData.product_details);

        // this.quantity = 0
        console.log('array length', this.quantity.length);
        let subTotal1: number = 0;
        let j = this.quantity.length;
        for (let y = 0; y < j; y++) {
          subTotal1 =
            subTotal1 +
            this.quantity[y] * this.cartData.product_details[y].product_cost;
          this.subTotal = subTotal1;
          console.log('subtotal', this.subTotal);
        }
        console.log('subtotal', this.subTotal);
        console.log('product json', this.cartData.product_details);
      }
    });
  }

  /**
   * if stock > 0 then it will add quantity by 1 to quantity array by id
   * @param {number} i of index number from array
   * @memberof CartComponent
   */
  onAddClick(i: number) {
    // this.i = i;
    if (this.stock > 0) {
      this.quantity[i] = this.quantity[i] + 1;
      // this.quantity = this.quantity + 1;
      this.stock = this.stock - 1;
      console.log('array quantity from add method', this.quantity);

      let j = this.quantity.length;
      console.log('array length', this.quantity.length);
      let subTotal1: number = 0;
      for (let y = 0; y < j; y++) {
        subTotal1 =
          subTotal1 +
          this.quantity[y] * this.cartData.product_details[y].product_cost;
        this.subTotal = subTotal1;
        console.log('subtotal', this.subTotal);
      }
    }
  }

  /**
   * it will subtract quantity by 1 to quantity array by using id
   * @param {number} i of index number from array
   * @memberof CartComponent
   */
  onRemoveClick(i: number) {
    // this.i = i;
    // public quantity = this.cartData.product_details[0].quantity;
    // this.quantity[i]= this.cartData.product_details[this.i].quantity;

    if (this.quantity[i] > 1) {
      console.log(
        'before   this.quantity[i] = this.quantity[i] - 1;',
        i,
        this.quantity[i]
      );
      this.quantity[i] = this.quantity[i] - 1;
      this.stock = this.stock + 1;

      let j = this.quantity.length;
      console.log('array length from upper remove', this.quantity.length);
      let subTotal1: number = 0;
      console.log('quantity array', this.quantity);
      for (let y = 0; y < j; y++) {
        console.log('p ', i, ':', this.quantity[i]);
        subTotal1 =
          subTotal1 +
          this.quantity[y] * this.cartData.product_details[y].product_cost;
        this.subTotal = subTotal1;
        console.log('subtotal', this.subTotal);
      }
    }
    // else{
    //   if(this.quantity.length == 1){
    //     console.log("length true");
    //     this.subTotal = 0
    //   }
    //   console.log("array length before splicing",this.quantity.length);
    //     console.log("quantity array before splicing",this.quantity);
    //   this.quantity.splice(i,1);
    //   console.log("array length after splicing",this.quantity.length);
    //     console.log("quantity array after splicing",this.quantity);
    //     this.cartData.product_details.splice(i, 1);
    //     console.log("product json",this.cartData.product_details);
    //     console.log("array length",this.quantity.length);
    //     console.log("quantity array",this.quantity);
    //   let j = this.quantity.length
    //   let subTotal1:number = 0
    //     for (let y = 0; y < j; y++) {
    //       subTotal1 = subTotal1 + (this.quantity[y] * this.cartData.product_details[y].product_cost);
    //       this.subTotal = subTotal1
    //       console.log('subtotal', this.subTotal);
    //     }
    //     console.log('subtotal', this.subTotal);
    // }
  }

  onDeleteClick(i: number) {
    this.openDialog(i);

    // if (this.abcd == "true") {

    //   if (this.quantity.length == 1) {
    //     console.log('length true');
    //     this.subTotal = 0;
    //   }
    //   console.log('array length before splicing', this.quantity.length);
    //   console.log('quantity array before splicing', this.quantity);
    //   this.quantity[i] = this.quantity[i];
    //   this.quantity.splice(i, 1);
    //   console.log('i inside delete click', i);
    //   console.log('array quantity', this.quantity);
    //   this.cartData.product_details.splice(i, 1);
    //   console.log('product json', this.cartData.product_details);

    //   // this.quantity = 0
    //   console.log('array length', this.quantity.length);
    //   let subTotal1: number = 0;
    //   let j = this.quantity.length;
    //   for (let y = 0; y < j; y++) {
    //     subTotal1 =
    //       subTotal1 +
    //       this.quantity[y] * this.cartData.product_details[y].product_cost;
    //     this.subTotal = subTotal1;
    //     console.log('subtotal', this.subTotal);
    //   }
    //   console.log('subtotal', this.subTotal);

    //   console.log('product json', this.cartData.product_details);
    // }
  }
}
