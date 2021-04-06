import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
import { CheckingService } from 'src/assets/services/checking.service';

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




  constructor(private authService: SocialAuthService, private service: CheckingService, private router: Router) {
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
    this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(user.name);
        console.log("user data from login",user);
        if(this.loggedIn = (this.user != null)){
            this.service.setData(user.name)
            this.getData = this.service.data()
            this.router.navigate(['/dashboard']);
          } else(this.output == true)
            {
             this.service.setData(localStorage.getItem("username"))
            } 
        console.log("getdata from login",this.getData);
        console.log(localStorage.getItem.name);
        
      
    });
  }

    // this is for email input field validation
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // for checking static emailid and password
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.output = output
      this.service.setData(localStorage.getItem("username"))
      this.router.navigate(['/dashboard']);
    } 
    else if(this.loggedIn == (this.user != null)){
      this.router.navigate(['/dashboard']);
    }
    else{
    this.msg ='Invalid username or password';
    alert(this.msg)
    console.log(this.msg);
    
    }
  }
}

