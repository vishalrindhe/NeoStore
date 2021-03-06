import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/assets/services/data.service';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';
// import {} from '../../../assets/services/data.service'

export interface DialogData {
  name: string;
  img: any;
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
  public cartInfo: any;
  public cartData = this.data.getCartData();
  public price = this.cartData.product_details[0].product_cost;
  public total = this.cartData.product_details[0].total_productCost;
  // public quantity = this.cartData.product_details[this.i].quantity;
  public stock = this.cartData.product_details[0].product_id.product_stock;
  name: any;
  animal: any;

  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  total2: number;
  ngOnInit() {
    // trying to share quantity to dataservice
    this.data.setCartCount(this.cartData.product_details[0].quantity);
    console.log(this.quantity);
    console.log(this.quantity[1]);

    // start loader
    this.spinner.show();

    // api call for list products in cart
    // on successful call store cart products data into cartInfo local var
    this.data.listProductsInCartGet().subscribe(
      (info) => {
        console.log('data :', info);
        this.cartInfo = info;
        console.log(this.cartInfo);

        // stop loader
        this.spinner.hide();
      },
      (error) => {
        console.log(error.error.message);
      }
    );

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
   * if user click remove then it will return true else false and from that basis it will make api call for delete cart product
   * @param {number} i
   * @memberof CartComponent
   */
  openDialog(name: string, img: any, i: string) {
    let xyz: string = '';
    const dialogRef = this.dialog.open(DialogCartComponent, {
      width: '50vh',
      data: {
        name: name,
        img: img,
      },
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
        this.spinner.show();
        this.data.deleteProductInCartDelete(i).subscribe((info) => {
          console.log('product quantity add success :', info);
          this.data.listProductsInCartGet().subscribe(
            (info) => {
              console.log('data :', info);
              this.cartInfo = info;
              console.log(this.cartInfo);
            },
            (error) => {
              console.log(error.error.message);
            }
          );
          this.spinner.hide();
        });
      }
    });
  }

  /**
   * if stock > 0 then it will add quantity by 1 to quantity array by id
   * @param {number} i of index number from array
   * @memberof CartComponent
   */
  onAddClick(quantity: number, i: number) {
    // this.i = i;

    let data = {
      quantity: quantity + 1,
    };

    this.data.updateProductQuantityInCartPut(data, i).subscribe(
      (info) => {
        console.log('product quantity add success :', info);
        // this.cartInfo = info
        // console.log(this.cartInfo);
        this.data.listProductsInCartGet().subscribe(
          (info) => {
            console.log('data :', info);
            this.cartInfo = info;
            console.log(this.cartInfo);
            // location.reload()
          },
          (error) => {
            console.log(error.error.message);
          }
        );
      },
      (error) => {
        console.log('product quantity add success :', error.error.message);
      }
    );
  }

  /**
   * it will subtract quantity by 1 to quantity array by using id
   * @param {number} i of index number from array
   * @memberof CartComponent
   */
  onRemoveClick(quantity: number, i: number) {
    console.log(quantity);

    let data = {
      quantity: quantity - 1,
    };

    this.data.updateProductQuantityInCartPut(data, i).subscribe(
      (info) => {
        console.log('product quantity delete success :', info);

        this.data.listProductsInCartGet().subscribe(
          (info) => {
            console.log('data :', info);
            this.cartInfo = info;
            console.log(this.cartInfo);
          },
          (error) => {
            console.log(error.error.message);
          }
        );
      },
      (error) => {
        console.log('product quantity add success :', error.error.message);
      }
    );
  }
  /**
   * here dialog box will open on delete product click
   * if user click remove then it will return true else false and from that basis it will make api call for delete cart product
   * @param {string} name
   * @param {*} img
   * @param {string} i
   * @memberof CartComponent
   */
  onDeleteClick(name: string, img: any, i: string) {
    this.openDialog(name, img, i);
  }

  /**
   * navigate to checkout page
   * @memberof CartComponent
   */
  checkout() {
    this.router.navigate(['/checkout']);
  }
}
