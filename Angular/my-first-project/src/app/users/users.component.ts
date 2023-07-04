import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  searchResult: Array<UserInterface> = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.users = json);
  }

  users: Array<UserInterface> = [];

  onInput(event: any) {
    this.searchValue = event.target.value;

    this.searchResult = this.users.filter(
      (user) =>
        user.name.includes(event.target.value)
    );

    console.log('Input', event.target.value, this.searchResult);
  }
}
