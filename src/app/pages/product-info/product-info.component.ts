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

  constructor(private data: DataService, private router: Router,private activatedrouter:ActivatedRoute){}

  ngOnInit(): void {
  }

  public productInfo = this.data.getProductDetail()

/**
 * copied from official doc of ng-starrating
 * @param {{oldValue:number, newValue:number, starRating:StarRatingComponent}} $event
 * @memberof ProductInfoComponent
 */
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
public _id = this.activatedrouter.snapshot.params['_id'];

  addToCart(){
    this.router.navigate(['/cart']);
  }
}

