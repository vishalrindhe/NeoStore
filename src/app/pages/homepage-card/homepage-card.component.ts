import { Component, OnInit } from '@angular/core';
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
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  public dataFromDataservice = this.data.get()

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
