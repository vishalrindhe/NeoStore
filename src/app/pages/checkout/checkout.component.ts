import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/assets/services/data.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';


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
  public paymentIdPresent: boolean = false;
  public paymentId: string = '';
  public snackMsg: string;
  public totalAmount:any

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  currentMessage = new BehaviorSubject<Object>(1);



  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private _snackBar: MatSnackBar,
    private angularFireMessaging: AngularFireMessaging
  ) {
    this.requestPermission()
    this.receiveMessage()
  }

  ngOnInit(): void {
    this.receivedata();

    // start loader
    this.spinner.show();
    this.data.listProductsInCartGet().subscribe(
      (info) => {
        console.log('data :', info);
        this.cartInfo = info;
        // cartInfo hold object of products
        console.log('cartInfo: ', this.cartInfo);
        this.totalAmount = this.cartInfo?.data.grandTotal * 100
        console.log("totalAmount", this.totalAmount+ typeof(this.totalAmount));
        this.totalAmount = String(this.totalAmount);
        console.log(typeof(String(this.totalAmount)));
        
        
        
        // stop loader
        this.spinner.hide();
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  /**
   * it will list addresses from api call
   * @memberof CheckoutComponent
   */
  receivedata() {
    this.data.listAdress().subscribe((data) => {
      this.address_list = data;
      console.log('address object: ', this.address_list);
      // address hold array of addresses
      this.addresses = this.address_list.data.address;
      console.log('address array: ', this.addresses);
    });
  }

  rzp1: any;

  /**
   * this function will accept selected address _id and pass it to api  call for placeOrder
   * @param {string} value
   * @memberof CheckoutComponent
   */
  onSubmit(value: string) {
    let pay: any = null;
    /**
     * this is for payment gatewat of RazorPay
     * @memberof CheckoutComponent
     */
    let options = {
      key: 'rzp_test_GkYGPDGdJRrCvG', // Enter the Key ID generated from the Dashboard
      amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      // order_id: 'order_9A33XWu170gUtm', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
      handler: function (response: any) {
        // alert(response.razorpay_payment_id);
        let redirect_url;
        if (
          typeof response.razorpay_payment_id == 'undefined' ||
          response.razorpay_payment_id < 1 ||
          response.razorpay_payment_id == null
        ) {
          // redirect_url = '/you-owe-money.html';
          alert('payment fail');
          // pay = false;
        } else {
          // alert('payment successful');
          // alert(response.razorpay_payment_id);
          pay = response.razorpay_payment_id;
          console.log('payId:', pay);
        }

        // location.href = redirect_url;
        // alert('payment fail');
        // alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9769673645',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#000',
      },
    };

    // creating object which contain address_id for passing to checkout api
    let data = {
      addressId: value,
    };

    console.log('mat value', value);

    if (value != null) {
      console.log('address: ', value);
      this.rzp1 = new this.data.nativeWindow.Razorpay(options, options.amount= this.totalAmount);
      this.rzp1.open();
      // .then(() =>{
      //   console.log(pay,"pay2");

      // });
      console.log(pay);

      // .then(()=>{
      //   // console.log(data);

      //   console.log("successful pay");

      // })
     
      let data1 = {
        "notification": {
        "title": "Hey there", 
        "body": "Subscribe to might ghost hack youtube channel",
        "icon":"../assets/image/Angular_full_color_logo.svg.png",
       "click_action" : "http://localhost:4200"
        },
           "to":this.data.fireStoreToken
        };

      setInterval(() => {
        if (pay != null || pay != undefined) {
          // start loader
          this.spinner.show();
          this.data.placeOrder(data).subscribe((data) => {
            this.router.navigate(['/']).then(() => {
              // stop spinner
              this.spinner.hide().then(() => {
                this.snackMsg = 'Order Placed Successfully';
                this.openSnackBar();
                this.abc()
               
              })
            });
          });
        }
        pay = null;
      }, 1000);
    }
  }

  openSnackBar() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: ['greenYesMatch'],
    });
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.data.fireStoreToken = token

      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload) => {
      console.log('new message received. ', payload);
      this.currentMessage.next(payload);
      this.showCustomNotification(payload)
    });
  }


  showCustomNotification(payload:any){
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options = {
      body:notify_data['body'],
      icon:"../assets/images/n.png",
      badge:"../assets/images/n.png",
      image:"../assets/images/n.png",
    }

    console.log("new message received", notify_data);
    let notify: Notification = new Notification(title,options)

    notify.onclick = event =>{
      event.preventDefault();
      this.data.isProfile = false;
      this.data.isChangePassword = false;
      this.data.isAddress = false;
      this.data.isOrder = true;
      // window.location.href = "http://localhost:4200/my-account";
      this.router.navigate(['/my-account']);

    }
    
  }

  

  abc(){
    console.log("abc token:", this.data.fireStoreToken);
    
    let data1 = {
      "notification": {
      "title": "Order PLaced Successfully", 

      "body": "Click for order details",
      "icon":"../assets/images/n.png",
     "click_action" : "http://localhost:4200/my-account"
      },
         "to":this.data.fireStoreToken
      };
    this.data.pushNotification(data1).subscribe((data) => {
      console.log("notification content:",data);
      
    })
  }
}
