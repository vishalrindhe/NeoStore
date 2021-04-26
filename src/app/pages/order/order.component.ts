import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public order_list:any =[];
  public order_listing:any =[];

  constructor( private data:DataService) { }

  ngOnInit():void{
    this.receivedata()
  }

receivedata(){
  this.data.orderList().subscribe((data)=>{
    this.order_list = data;
    this.order_listing = this.order_list.data.orders[0].items;
    console.log(this.order_listing);
  });
}

}
