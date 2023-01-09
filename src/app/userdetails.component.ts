import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'user-details',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  public user;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = users.find((user) => user.id === userIdFromRoute);
  }
}
