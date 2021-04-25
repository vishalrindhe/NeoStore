import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
// import { NgxImgZoomService } from 'ngx-img-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { DataService } from 'src/assets/services/data.service';
import { RateProductComponent } from '../rate-product/rate-product.component';


export interface DialogData {
  name: string;
  img:any
}

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public color:string = "black"
  public productInfo:any
  public _id = this.activatedrouter.snapshot.params['_id'];
  public productDetail:any ={}
  public avgRating:number
  public src:any
public mainImage:any
public snackMsg:string

  constructor(private data: DataService,public dialog: MatDialog, private router: Router,private activatedrouter:ActivatedRoute,private _snackBar: MatSnackBar
    ){}

  ngOnInit(){
      this.data.listProductsGet().subscribe((info) => {
        console.log(info);
        this.productInfo = info;
      console.log("productInfo: ",this.productInfo);
      for(let i of this.productInfo.data.docs){
        if(this._id == i.id){
          this.productDetail = i
          this.mainImage = this.productDetail.mainImage
          console.log("p:", this.productDetail);
          this.avgRating = i.avgRating
        }
      }
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
    data: {name: this.productDetail.name,
      img: this.productDetail.mainImage}
  });
}

addToCart(productId: string) {
  let data = {
    productId: productId,
    quantity: 1,
  };
  console.log('productId', productId);

  this.data.addProductsInCartPost(data).subscribe(
    (info) => {
      console.log('data :', info);
      this.snackMsg = "Product Added"
      this.openSnackBar()
    },
    (error) => {
      let msg;
      msg = error;
      this.snackMsg = error.error.message
      this.openSnackBarError()
      console.log(error.error.message);
    }
  );
}

openSnackBar() {
  this._snackBar.open(this.snackMsg, 'x', {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 5000,
    panelClass:['greenYesMatch']

  });
}

openSnackBarError() {
  this._snackBar.open(this.snackMsg, 'x', {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 5000,
    panelClass:['redNoMatch']
      });
}

  onMainImgClick(){
    this.mainImage = this.productDetail.mainImage
  }

  onImgClick(id:any){
    // for(let i=0; i< this.productDetail.data.docs.subImages; i++){
      let j=0
      for(let i of this.productDetail.subImages){
      if(j== id){
        this.src = i
        console.log(this.src);
        this.mainImage = i
        break
      }
      j++
    }
    // this.src = id
    // console.log(id);
    
  }
}

