import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/assets/services/data.service';
import { AddressListComponent, DialogData } from '../address-list/address-list.component';
// import { DialogData } from '../cart/cart.component';

@Component({
  selector: 'app-dialog-delete-address',
  templateUrl: './dialog-delete-address.component.html',
  styleUrls: ['./dialog-delete-address.component.scss']
})
export class DialogDeleteAddressComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddressListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private data1:DataService) { }
    public userData:any={};

  ngOnInit(): void {
    this.sub()
  }
  sub(){
    this.data1.listAdress().subscribe((data)=>{
      // let needdata = data;
      console.log(data);

    });
  }
  

  onSubmit(){
    this.data1.deleteAddress(this.data.id).subscribe((data)=>{
      this.data1.listAdress().subscribe((data)=>{
        // let needdata = data;
        console.log(data);  
      })
      console.log("deleted from delete dialog",data);
      
    })
  }


  onNoClick() {
    this.dialogRef.close('true');
    this.sub();
  }


}
