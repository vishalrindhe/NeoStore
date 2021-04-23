import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
import { CheckingService } from 'src/assets/services/checking.service';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // to hide or unhide password input text
  hide = true;
  user: SocialUser;
  loggedIn: boolean;
  data:any
  getData:any=''
  msg!: string;
  output:boolean




  constructor(private authService: SocialAuthService, private service: CheckingService, private router: Router, private data1: DataService) {
    // console.log("from constructor",this.user)
   }

  // onClicked method on SignInWithGoogle button
  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   this.data= this.service.signInWithGoogle();
    console.log("logging with google");
    console.log(this.user);
    console.log("inside signWithGoogle from local variable",this.data); 
    
  }

  // onClicked method on SignInWithFacebook button
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
  }

  // onclicked on signed out button
  signOut(): void {
    this.authService.signOut();
    console.log(this.user);
    
  }

  // unused method
  passingDataToCheckService( )
  {
    // this.service.setData(this.user)
    // this.router.navigate(['/userinfo'])    
    // console.log(this.service.setData(this.user));
    return this.user
    
  }  



  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //     this.user = user;
    //     this.loggedIn = (user != null);
    //     console.log(user.name);
    //     console.log("user data from login",user);
    //     if(this.loggedIn = (this.user != null)){
    //         this.service.setData(user.name)
    //         this.getData = this.service.data()
    //         this.router.navigate(['/dashboard']);
    //       } else(this.output == true)
    //         {
    //          this.service.setData(localStorage.getItem("username"))
    //         } 
    //     console.log("getdata from login",this.getData);
    //     console.log(localStorage.getItem.name);
        
      
    // });
  }

    // this is for email input field validation
    public email = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
      ),
    ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email')
      ? 'Not a valid email'
      : 'Not a valid email';
  }

  /**
   * if user want to enter username and password for login then 
   * this will check username and password with static data from CheckingService it it is true then output variable will true or false
   * after that if output var is true then it will send data to setData method from CheckingService and redirect to dashboard
   * @param {string} uname
   * @param {string} p
   * @memberof LoginComponent
   */
  public xyz:any
  check(uname: string, p : string)
  {
    let data = {
      email: uname,
    password: p,
    }

    this.data1.loginPost(data).subscribe((info) =>{
      this.xyz = info
    console.log('from then',this.xyz.data);
    localStorage.setItem("firstName",this.xyz.data.firstName)
    localStorage.setItem("lastName",this.xyz.data.lastName)
    localStorage.setItem("email",this.xyz.data.email)
    localStorage.setItem("gender",this.xyz.data.gender)
    localStorage.setItem("mobile",this.xyz.data.mobile)
    localStorage.setItem("token",this.xyz.data.token)
    // localStorage.setItem("v","v")
    this.router.navigate(['/dashboard']);
    },(error) => {
      alert('Invalid username or password')
          console.log('from catch')
    })
  }

  // public email = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(
  //     '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
  //   ),
  // ]);

  onRegisterClick(){
    this.router.navigate(['/registration']);
  }
}

