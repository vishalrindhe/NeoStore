import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public order_list:any =[]; 
  public a:any

  constructor(private service:DataService) { }

  ngOnInit():void{
    // this.receivedata()
    this.a = this.service.sendOrderData();
    this.order_list = this.a.product_details;
  }

// receivedata(){
//   this.order_list = this.service.sendOrderData();
//   console.log(this.order_list);
// }

}
