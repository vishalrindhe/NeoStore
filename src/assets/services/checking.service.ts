import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  userData:any
  item:any

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.userData = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // if(this.userData){
    //   localStorage.setItem("username",this.userData.name)
    // }
  }

  data(){
    console.log("from getdata from service",this.item);
    if(this.item != null)
    {
      localStorage.setItem("username",this.item)
      console.log("from if inside data");
      
    }
    return this.item

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut() {
    console.log(localStorage.getItem("username"));
    
    localStorage.removeItem("username")
    this.authService.signOut();
  }

  setData(obj: any)
  {
    this.item = obj 
    console.log("from set data",this.item);
  }

  checkusernameandpassword(uname: string, pwd : string)
  {
    if(uname == "admin" && pwd =="admin123"){
      localStorage.setItem("username",uname);
      this.setData(uname)
      console.log("login successful by id pass");
      
      return true;
    } else{
       return false;
      }
  }
}
