import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ApiService } from '../../../assets/services/data.service';
import { RouterModule, Router } from '@angular/router';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  error: string = '';
  hide = true;
  hide1 = true;
  hide2 = true;
  match = '';
  passMatch: boolean;
  public snackMsg: string;

  // form: FormGroup = new FormGroup({
  //   password: new FormControl(''),
  //   new_password: new FormControl(''),
  //   confirm_password: new FormControl(''),
  // });

  constructor(
    private data: DataService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   password: new FormControl('', [Validators.required]),
    //   new_password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(14),
    //     Validators.pattern('[a-zA-Z0-9s]+'),
    //   ]),
    //   confirm_password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(14),
    //     Validators.pattern('[a-zA-Z0-9s]+'),
    //   ]),
    // });
  }

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  newPassword = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  // public checkError = (controlName: string, errorName: string) => {
  //   return this.form.controls[controlName].hasError(errorName);
  // };

  onSubmit(password: string, newPassword: string) {
    console.log('password',password);
    let token = localStorage.getItem('user.data.token');
    let formdata = {
      password: this.password.value,
      newPassword: this.newPassword.value,
    };
    console.log("formdata",formdata); 
    this.data.changePassword(formdata).subscribe(
      (res: any) => {
        console.log(res);
        this.data.isProfile=true;
      this.data.isChangePassword=false;
      this.data.isAddress=false;
      this.data.isOrder=false;
    this.router.navigate(['/']).then(() =>{
        this.snackMsg = "Password changed successfully"
        this.openSnackBar()
        }
        );
      },
      (error) => {
        // alert('Invalid Password');
        console.log('from catch',error.error.message);
        this.snackMsg = error.error.message
        this.openSnackBarError()
      }
    );
  }

  openSnackBar() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['greenYesMatch'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['redNoMatch'],
    });
  }

  // passwordcheck() {
  //   if (this.password == this.confirmPassword) {
  //     this.match = '';
  //     this.passMatch = true;
  //   } else {
  //     this.passMatch = false;
  //     this.match = 'password not matching';
  //   }
  // }
}
