import { Component, OnInit } from '@angular/core';
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
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  public dataFromDataservice = this.data.get()
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

}
