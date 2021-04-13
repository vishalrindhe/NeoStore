import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../profile/profile.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { EditInfo } from 'src/assets/services/edit-info';
import { NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 


@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss'],
})
export class DialogProfileComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
   }

  // public userModel = new EditInfo("","");

  // validator for first name
  // public name = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('[a-zA-Z]*'),
  // ]);

  // getErrorMessageForName() {
  //   if (this.name.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.name.hasError('name')
  //     ? 'Must include only alphabets'
  //     : 'Must include only alphabets';
  // }
  firstName = 'vishl';
  lastName = 'rindhe';
  email = 'abc@gn.cn';
  phone = '9876543210';
  gender = "Male"
  dob = ""

  firstNameFormControl = new FormControl(this.firstName, [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
  ]);

  lastNameFormControl = new FormControl(this.lastName, [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
  ]);

  emailFormControl = new FormControl(this.email, [
    Validators.required,
    Validators.pattern(
      '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
    ),
  ]);

  phoneFormControl = new FormControl(this.phone, [
    Validators.required,
    Validators.pattern('^[6-9][0-9]{9}$'),
  ]);

  public genderFormControl = new FormControl(this.gender, [Validators.required]);

  dobFormControl = new FormControl(this.dob, [
    Validators.required
  ]);


  // public firstName = new FormControl(this.f)
  // public lastName = new FormControl('')
  // public gender = new FormControl('')
  // public dob = new FormControl('')
  // public email = new FormControl('')
  // public phone = new FormControl('')

  onSubmit(fname: string,lname: string,gender:string,dob:string,email:string,phone:string) {
    // console.log(data );
    let editInfo = {
      "first_name":fname,
      "last_name": lname,
      "gender": gender,
      "dob": dob,
      "email": email,
      "phone_no": phone
      // "profile_img":"image_1574053862482_naveen.jpeg"
    }
    console.log(editInfo);
    
  }

  
}
