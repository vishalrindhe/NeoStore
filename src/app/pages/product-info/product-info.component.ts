import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
// import { NgxImgZoomService } from 'ngx-img-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { DataService } from 'src/assets/services/data.service';
import { RateProductComponent } from '../rate-product/rate-product.component';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

export interface DialogData {
  name: string;
  img: any;
}

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  public color: string = 'black';
  public productInfo: any = {};
  public _id = this.activatedrouter.snapshot.params['_id'];
  public productDetail: any = {};
  public avgRating: number;
  public src: any;
  public mainImage: any;
  public snackMsg: string;

  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    // start loader
    this.spinner.show();

    // display all product list
    this.data.listProductsGet().subscribe((info) => {
      console.log(info);
      this.productInfo = info;
      console.log('productInfo: ', this.productInfo);

      // here we are getting product info of particular product whose product id is at url
      for (let i of this.productInfo.data.docs) {
        if (this._id == i.id) {
          this.productDetail = i;
          this.mainImage = this.productDetail.mainImage;
          console.log('p:', this.productDetail);
          this.avgRating = i.avgRating;
        }
      }

      // stop loader
      this.spinner.hide();
      // this.ngxLoader.stop();
    });
  }

  // public productInfo:any = this.data.listProductsGet()

  /**
   * copied from official doc of ng-starrating
   * @param {{oldValue:number, newValue:number, starRating:StarRatingComponent}} $event
   * @memberof ProductInfoComponent
   */
  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //     alert(`Old Value:${$event.oldValue},
  //       New Value: ${$event.newValue},
  //       Checked Color: ${$event.starRating.checkedcolor},
  //       Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  //   }

  // rate product dialog
  openDialog() {
    let xyz: string = '';
    const dialogRef = this.dialog.open(RateProductComponent, {
      width: 'auto',
      data: {
        name: this.productDetail.name,
        img: this.productDetail.mainImage,
      },
    });
  }

  /**
   * add product to cart
   * @param {string} productId
   * @memberof ProductInfoComponent
   */
  addToCart(productId: string) {
    let data = {
      productId: productId,
      quantity: 1,
    };
    console.log('productId', productId);

    this.data.addProductsInCartPost(data).subscribe(
      (info) => {
        console.log('data :', info);
        this.snackMsg = 'Product Added';
        this.openSnackBar();
      },
      (error) => {
        let msg;
        msg = error;
        this.snackMsg = error.error.message;
        this.openSnackBarError();
        console.log(error.error.message);
      }
    );
  }

  /**
   * if product added to cart then display green snack bar
   * @memberof ProductInfoComponent
   */
  openSnackBar() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['greenYesMatch'],
    });
  }

  /**
   * if product not added to cart then display red snack bar
   * @memberof ProductInfoComponent
   */
  openSnackBarError() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['redNoMatch'],
    });
  }
  /**
   * on click of thumbnail image of mainImage display it to big view
   * @memberof ProductInfoComponent
   */
  onMainImgClick() {
    this.mainImage = this.productDetail.mainImage;
  }
  /**
   * image id will came to this function and by that image id pass respective image to that mainImage variable
   * image will pass to mainImage var of onClick of thumbnail images
   * @param {*} id
   * @memberof ProductInfoComponent
   */
  onImgClick(id: any) {
    let j = 0;
    for (let i of this.productDetail.subImages) {
      if (j == id) {
        this.src = i;
        console.log(this.src);
        this.mainImage = i;
        break;
      }
      j++;
    }
  }
}
