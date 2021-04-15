import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private data: DataService) { }

  public productList = this.data.getProductList()
  ngOnInit(): void {
    console.log(this.productList);
    
  }

}
