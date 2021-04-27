import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public address_list: any;
  public addresses: any;
  public cartInfo: any;
  public firstName: string | null = localStorage.getItem('firstName');
  public lastName: string | null = localStorage.getItem('lastName');

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receivedata();

    this.data.listProductsInCartGet().subscribe(
      (info) => {
        console.log('data :', info);
        this.cartInfo = info;
        // cartInfo hold object of products
        console.log('cartInfo: ', this.cartInfo);
        // location.reload()
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  receivedata() {
    this.data.listAdress().subscribe((data) => {
      this.address_list = data;
      console.log('address object: ', this.address_list);
      // address hold array of addresses
      this.addresses = this.address_list.data.address;
      console.log('address array: ', this.addresses);
    });
  }
  onSubmit(value: string) {
    let data = {
      addressId: value,
    };

    console.log('mat value', value);

    if (value != null) {
      console.log('address: ', value);
      this.data.placeOrder(data).subscribe((data) => {
        this.router.navigate(['/']).then(() => {
          alert('order placed successfully');
        });
      });
    }
  }
}
