import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private data:DataService) { }

  public carouselImg:any

  ngOnInit(): void {
    this.data.listAllCategoryGet().subscribe(
      (info) => {
        this.carouselImg = info
        console.log("category:",info);
        
        console.log(this.carouselImg.data[0].image);
        
      });
    }
  
}
