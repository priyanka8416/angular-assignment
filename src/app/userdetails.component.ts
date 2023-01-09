import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from './users';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'user-details',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  public user;
  public editUser: boolean = false;

  userForm = new FormGroup({
    displayName: new FormControl(''),
    givenName: new FormControl(''),
    mail: new FormControl(''),
    details: new FormControl(''),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = users.find((user) => user.id === userIdFromRoute);
  }

  getUserData() {
    this.editUser = true;
    this.userForm.patchValue({
      displayName: this.user.displayName,
      givenName: this.user.givenName,
      mail: this.user.mail,
      details: this.user.details,
    });
  }

  setUserData(user) {
    this.editUser = false;
    localStorage.setItem('user-data', JSON.stringify(user.value));
    let formValue = JSON.parse(localStorage.getItem('user-data'));
    this.user.displayName = formValue.displayName;
    this.user.givenName = formValue.givenName;
    this.user.mail = formValue.mail;
    this.user.details = formValue.details;
  }
}
