import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  field: string;
  data: any;
}

export interface DialogData {
  [x: string]: any;
  animal: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [{ field: 'Hydrogen', data: 'H' }];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // start loader
    this.spinner.show();
    console.log(this.userData);

    // stop loader
    this.spinner.hide();
  }

  animal: string;
  name: string;
  /**
   *  open dialog box for edit user info
   * @memberof ProfileComponent
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProfileComponent, {
      width: '50vh',
      data: { name: this.name, animal: this.animal },
    });
  }
  /**
   * get user info from localstorage
   * @memberof ProfileComponent
   */
  public userData = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    gender: localStorage.getItem('gender'),
    mobile: localStorage.getItem('mobile'),
    email: localStorage.getItem('email'),
  };

  displayedColumns: string[] = ['field', 'data'];
  dataSource = ELEMENT_DATA;

  // Belowed unused methods
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
