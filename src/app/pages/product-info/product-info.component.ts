import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
// import { NgxImgZoomService } from 'ngx-img-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public color:string = "black"

  ngOnInit(): void {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}

