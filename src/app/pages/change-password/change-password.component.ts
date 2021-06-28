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
import { NgxSpinnerService } from 'ngx-spinner';
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
  public snackMsg: string;
  public passMatch: boolean = false;

  constructor(
    private data: DataService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.match = '';
  }

  // validation for old password input field
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  // validation for new password input field
  newPassword = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  // validation for confirm password input field
  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);
  /**
   * checks new password and confirm password field
   * @memberof ChangePasswordComponent
   */
  passwordcheck() {
    if (this.newPassword.value == this.confirmPassword.value) {
      console.log('no');

      this.match = '';
      // console.log('match');
      // return false
      this.passMatch = true;
    } else {
      console.log('match');

      this.passMatch = false;
      this.match = 'password not matching';
      // console.log('not');
    }
  }

  /**
   * sends old password and new password to api as an object form
   * @param {string} password
   * @param {string} newPassword
   * @memberof ChangePasswordComponent
   */
  onSubmit(password: string, newPassword: string) {
    console.log('password', password);
    let token = localStorage.getItem('user.data.token');
    let formdata = {
      password: this.password.value,
      newPassword: this.newPassword.value,
    };
    console.log('formdata', formdata);
    this.spinner.show();
    this.data.changePassword(formdata).subscribe(
      (res: any) => {
        console.log(res);
        this.data.isProfile = true;
        this.data.isChangePassword = false;
        this.data.isAddress = false;
        this.data.isOrder = false;
        this.spinner.hide();
        this.router.navigate(['/']).then(() => {
          this.snackMsg = 'Password changed successfully';
          this.openSnackBar();
        });
      },
      (error) => {
        console.log('from catch', error.error.message);
        this.snackMsg = error.error.message;
        this.openSnackBarError();
      }
    );
  }

  // if password changed successfully the this green snackbar will displayed
  openSnackBar() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['greenYesMatch'],
    });
  }

  // if there is any error occur while changing password then red snackbar will displaed wwith the error message
  openSnackBarError() {
    this._snackBar.open(this.snackMsg, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['redNoMatch'],
    });
  }
}
