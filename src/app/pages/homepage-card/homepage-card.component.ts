import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { DataService } from 'src/assets/services/data.service';


@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {
  rating =  5
  value = 5
  public dataFromDataservice = this.data.get()
  public topFive:any
  public snackMsg:string
  


  constructor(private data: DataService, private router: Router,private _snackBar: MatSnackBar
    ) { }
    public token = this.data.token
  ngOnInit(): void {
    this.token = this.data.token

    this.data.topFiveProductGet().subscribe((info) =>{
      this.topFive = info
      console.log(this.topFive);
      
    })
    console.log("token",this.token);
    
  }

/**
 * used for star rating ; it is external component
 * @param {{oldValue:number, newValue:number, starRating:StarRatingComponent}} $event
 * @memberof HomepageCardComponent
 */
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onCardClick(_id:string){
    this.router.navigate(['/productInfo/'+_id])
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
        this.data.listProductsInCartGet().subscribe((info) =>{
          this.data.cartValue = info.data.products.length
          // this.cartValue = this.data.cartValue
          // console.log(this.cartValue);
          
          
        })
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
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass:['greenYesMatch']

    });
  }

  openSnackBarError() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass:['redNoMatch']
        });
  }




}
