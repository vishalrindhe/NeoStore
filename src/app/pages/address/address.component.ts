import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public address_list:any=[];
  constructor(private address_service:DataService) { }

  

  ngOnInit(): void {
    this.recievedata();
  }

  recievedata(){
    this.address_list = this.address_service.senddata();
    console.log(this.address_list);
  }

  del_address(i:number){
    this.address_service.deleteItem(i);
  }

  edit_address(i:number){
    this.address_service.editItem(i);
  }

}
