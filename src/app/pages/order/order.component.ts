import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/assets/services/data.service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public order_list:any =[];
  public order_listing:any =[];
  j:any = 0 

  constructor( private data:DataService,private spinner: NgxSpinnerService ) { }

  ngOnInit():void{

    // start loader (loader will stop inside receivedata function after api call is successfull)
    this.spinner.show();
    this.receivedata()
  }

/**
 * function make api call for listing order and subscribe data into order_list variable
 * @memberof OrderComponent
 */
receivedata(){
  //api call for listing orders for user
  this.data.orderList().subscribe((data)=>{
    this.order_list = data;
    console.log(data);
    
    this.order_listing = this.order_list.data.orders[1].items;
    console.log(this.order_listing);

    //stop loader
    this.spinner.hide();
  });
}

}
