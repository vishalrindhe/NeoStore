import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
// import { NgxImgZoomService } from 'ngx-img-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { DataService } from 'src/assets/services/data.service';



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
  constructor(private data: DataService, private router: Router,private activatedrouter:ActivatedRoute){}

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

  addToCart(){
    this.router.navigate(['/cart']);
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

