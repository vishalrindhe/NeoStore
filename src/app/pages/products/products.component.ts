import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/assets/services/data.service';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

const desserts: Dessert[] = [
  {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
  {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
  {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
  {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
  {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  collection = Array();
  c = Array()
  public dataCategory = Array()
  public colorCategory = Array()

  p: number = 1;
  public shown = false;
abc = desserts
public categories = ['General', 'Exotic', 'Extreme', 'Extreme', 'General' ,'Water', 'Extreme']
.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
dataSource = new MatTableDataSource(desserts)


  // sortedData: Dessert[];


  @ViewChild(MatSort) sort: MatSort;
  public productList = this.data.getProductList()
  public category1= Array()
  public category = Array()
  public categoryColor1= Array()
  public categoryColor = Array()
  checkBoxInstance: any;
  ngOnInit(){
    console.log(this.productList);
    this.dataSource.sort = this.sort;
    // here we are pushing color and category of product in its respective array
    for(let i=0; i< this.productList.product_details.length; i++){
      this.category1.push(this.productList.product_details[i].category_id.category_name)
      this.categoryColor1.push(this.productList.product_details[i].Color_id.color_name)
    }

    // taking distinct element from array
    this.category = this.category1.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
    console.log(this.category); 
    this.categoryColor = this.categoryColor1.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
    console.log(this.categoryColor);    
  }

  constructor(private data: DataService, private router: Router) {
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

getCategory($event: any,category:string){

  let a = document.getElementById('1')
  

  console.log();
  
  console.log($event);
  if($event.isChecked){
console.log($event.isChecked);

  }

console.log("isChecked",$event.isChecked);

  
console.log(category);
// for(let i=0; i< this.c.length; i++){
  // if(category !== this.c[i]){
    console.log(this.c.includes(category));

  this.c.push(category);

    for(let b of this.c){
      console.log("b",b);
      

    }

}


public az= false
applyCategory(checkBox: any){
  console.log("h",checkBox);
  
  let categoryClass = document.getElementsByClassName('categoryClass');
  console.log("categoryClass.length",categoryClass.length);
  console.log("categoryClass.length",categoryClass[0]);

  
for(let i=0; i< categoryClass.length; i++){
  if(categoryClass[0]){
    console.log("true");
    
  }
}

console.log("1");
this.dataCategory = this.c
this.colorCategory = this.c 
this.router.navigate(['/products']);
}

}
