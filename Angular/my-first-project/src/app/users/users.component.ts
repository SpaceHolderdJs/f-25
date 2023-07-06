import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchValue: string = '';

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers();
  }

  onInput(event: any) {
    this.searchValue = event.target.value;
    this.usersService.searchUsers(this.searchValue, ["name", "email", "phone"]);
  }
}
