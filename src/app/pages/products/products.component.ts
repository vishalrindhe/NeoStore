import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  collection = Array();
  c = Array()
  p: number = 1;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: DataService) {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  //  collection = [1,2,3,45]
collection1 = [
  {"name":"A", "price": 100},
  {"name":"B", "price": 200},
  {"name":"C", "price": 300},
  {"name":"D", "price": 400},
  {"name":"E", "price": 500},
  {"name":"F", "price": 600},
  {"name":"G", "price": 700},
  {"name":"H", "price": 800},
  {"name":"I", "price": 900},
];

  public productList = this.data.getProductList()
  ngOnInit(): void {
    console.log(this.productList);
    // this.collection.sort = this.sort;
    // this.c.sort = this.sort
    // this.collection1.sort = this.sort;
    // this.productList.sort = this.sort;
  }



}
