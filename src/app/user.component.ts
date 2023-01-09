import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users: {
    id: number;
    displayName: string;
    givenName: string;
    mail: string;
    details: string;
  }[];

  constructor(private userService: UserService, private sortPipe: SortPipe) {}

  ngOnInit() {
    this.userService.getUser().subscribe((data) => {
      this.users = data.users;
      const sortedArr = this.sortPipe.transform(
        this.users,
        'desc',
        'displayName'
      );

      console.log(JSON.stringify(sortedArr));
    });
  }

  getFilteredValue(event) {
    this.userService.getUser().subscribe((data) => {
      this.users = data.users;
      let selectedValue = event.target.value;
      let findedData = this.users.find((item) => item.id == selectedValue);
      let findedDataArray = [];
      findedDataArray.push(findedData);
      this.users = findedDataArray;
    });
  }
}
