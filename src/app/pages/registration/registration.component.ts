import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/assets/services/data.service';
import { Registration } from '../../../assets/data/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // variable for eye button inside password field
  hide = true;
  hide1 = true;
  pass: string;
  confirmPass: string;
  public match: string;
  public passMatch: boolean = false;

  // registration = new Registration('','','','','',1)

  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.match = '';
  }

  // validator for first name
  public name = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z]{3,20}$'),
  ]);

  getErrorMessageForName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name')
      ? 'Must include only alphabets'
      : 'Must include only 3-20 alphabets';
  }

  // validator for last name
  public lastName = new FormControl('', [
    // Validators.required,Validators.minLength(3),
    Validators.pattern('[a-zA-Z]{3,20}$'),
  ]);

  getErrorMessageForLastName() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.lastName.hasError('lastName')
      ? 'Must include only alphabets'
      : 'Must include only 3-20 alphabets';
  }

  // validation for email field
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

  // validator for password
  public password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{8,12}$'),
  ]);

  getErrorMessageForPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password')
      ? ''
      : 'Password must contain only Alphanumeric characters';
  }

  //  validator for confirm password
  public confirmPassword = new FormControl('', [Validators.required]);

  getErrorMessageForConfirmPassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    } else return;
  }

  // validator for phone
  public phone = new FormControl('', [
    Validators.required,
    Validators.pattern('^[6-9][0-9]{9}$'),
  ]);

  getErrorMessageForPhone() {
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone.hasError('phone')
      ? ''
      : 'Phone number must have 10 digits and starts from 6,7,8,9';
  }

  // validator for gender
  public gender = new FormControl('male', [Validators.required]);

  getErrorMessageForGender() {
    // if (this.gender.hasError('required')) {
    //   return 'You must select a gender';
    // }
    if (this.gender.hasError('gender')) {
      return 'abc';
    }
  }

  /**
   *getting password value from registration password field
   * @param {string} pass
   * @memberof RegistrationComponent
   */
  getPassword(pass: string) {
    this.pass = pass;
    // console.log(this.pass);
  }

  /**
   *getting confirm password value from registration confirm password field
   * @param {string} confirmPass
   * @memberof RegistrationComponent
   */
  getConfirmPassword(confirmPass: string) {
    this.confirmPass = confirmPass;
    // console.log(this.confirmPass);
  }

  /**
   *checking password == confirm password
   * @memberof RegistrationComponent
   */
  passwordcheck() {
    if (this.password.value == this.confirmPassword.value) {
      this.match = '';

      this.passMatch = true;
    } else {
      this.passMatch = false;
      this.match = 'password not matching';
    }
  }
  /**
   * registration function will accept below parameters and if registration is successful then it will redirect to login page
   * @param {*} name
   * @param {*} lastName
   * @param {*} email
   * @param {*} phone
   * @param {*} gender
   * @param {*} password
   * @param {*} confirmPassword
   * @memberof RegistrationComponent
   */
  registration(
    name: any,
    lastName: any,
    email: any,
    phone: any,
    gender: any,
    password: any,
    confirmPassword: any
  ) {
    let reg = {
      firstName: name,
      lastName: lastName,
      email: email,
      mobile: phone,
      gender: gender,
      password: password,
      confirm_password: confirmPassword,
    };

    // if api call from registration is successful then it will redirect to login page
    this.data.registrationPost(reg).subscribe(
      (info) => {
        console.log('data :', info);
        this.router.navigate(['/login']);
      },
      (error) => {
        let msg;
        msg = error;
        console.log(error);
        alert(msg.error.message);
      }
    );
  }
}
