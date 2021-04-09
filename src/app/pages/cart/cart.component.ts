import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';
// import {} from '../../../assets/services/data.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private data: DataService) { }
total2:number
  ngOnInit() {
    // trying to share quantity to dataservice
    this.data.setCartCount(this.quantity)
    
    
  }

  public cartData = this.data.getCartData();
  public price = this.cartData.product_details[0].product_cost;
  public total = this.cartData.product_details[0].total_productCost;
  public quantity = this.cartData.product_details[0].quantity;

  
}
