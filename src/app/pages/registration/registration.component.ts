import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // variable for eye button inside password field
  hide = true;
  hide1 = true;


  constructor() { }

  ngOnInit(): void {
  }

  // validator for first name
  public name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);

  getErrorMessageForName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Must include only alphabets' : 'Must include only alphabets';
  }

  // validator for last name
  public lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);

  getErrorMessageForLastName() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('lastName') ? 'Must include only alphabets' : 'Must include only alphabets';
  }

  // validation for email field
  public email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
