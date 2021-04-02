import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  name:string='vishal'
  cartValue:number=5
  panelOpenState = false;

  title = 'NeoStore';

  abc(input:string){
    console.log("msg in search bar",input);
    
  }

}
