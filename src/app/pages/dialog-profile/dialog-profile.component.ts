import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../profile/profile.component';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { EditInfo } from 'src/assets/services/edit-info';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss'],
})
export class DialogProfileComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    private data1: DataService
  ) {}

  public userData = this.data1.getUserProfile();

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  // getting data from localhost which is already stored
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  gender = localStorage.getItem('gender');
  phone = localStorage.getItem('mobile');
  email = localStorage.getItem('email');

  /**
   * input required and pattern validation 
   * @memberof DialogProfileComponent
   */
  firstNameFormControl = new FormControl(this.firstName, [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
  ]);

  /**
   * input required and pattern validation 
   * @memberof DialogProfileComponent
   */
  lastNameFormControl = new FormControl(this.lastName, [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
  ]);

  /**
   * input required and pattern validation 
   * @memberof DialogProfileComponent
   */
  emailFormControl = new FormControl(this.email, [
    Validators.required,
    Validators.pattern(
      '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
    ),
  ]);

  /**
   * input required and pattern validation 
   * @memberof DialogProfileComponent
   */
  phoneFormControl = new FormControl(this.phone, [
    Validators.required,
    Validators.pattern('^[6-9][0-9]{9}$'),
  ]);

  /**
   * input required validation 
   * @memberof DialogProfileComponent
   */
  public genderFormControl = new FormControl(this.gender, [
    Validators.required,
  ]);

/**
 *  needs 5 parameters for editing
 * @param {string} fname
 * @param {string} lname
 * @param {string} gender
 * @param {string} email
 * @param {string} phone
 * @memberof DialogProfileComponent
 */
onSubmit(
    fname: string,
    lname: string,
    gender: string,
    // dob: string,
    email: string,
    phone: string
  ) {
    // console.log(data );
    let editInfo = {
      first_name: fname,
      last_name: lname,
      gender: gender,
      // dob: dob,
      email: email,
      phone_no: phone,
      // "profile_img":"image_1574053862482_naveen.jpeg"
    };
    console.log(editInfo);
  }

  imagePath: any;
  imgURL: any;
  public message: string | undefined;

  /**
   * code for image preview 
   * @param {*} files
   * @return {*} 
   * @memberof DialogProfileComponent
   */
  preview(files: any) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  // from below this code is unecessary code not needed now

  /**
   * just redirect to order page
   * @memberof DialogProfileComponent
   */
  onOrderClick() {
    this.router.navigate(['/order']);
  }

  onProfileClick() {
    this.router.navigate(['/profile']);
  }

  onAddressClick() {
    this.router.navigate(['/address']);
  }

  onChangePasswordClick() {
    this.router.navigate(['/changepassword']);
  }
}
