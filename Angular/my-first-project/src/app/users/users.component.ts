import { Component } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  searchValue: string = '';
  searchResult: Array<UserInterface> = [];

  users: Array<UserInterface> = [
    {
      name: 'Igor',
      age: 23,
      locations: [
        { lat: 127271271, lon: 1212121, title: 'Kyiv' },
        { lat: 127271271, lon: 23222322, title: 'Poltava' },
      ],
    },
    {
      name: 'Oleg',
      age: 63,
      locations: [{ lat: 127271271, lon: 1212121, title: 'Lviv' }],
    },
    {
      name: 'Nastya',
      age: 63,
      locations: [{ lat: 127271271, lon: 1212121, title: 'Lviv' }],
    },
  ];

  onInput(event: any) {

    this.searchValue = event.target.value;

    this.searchResult = this.users.filter((user) =>
      user.name.includes(event.target.value)
    );

    console.log('Input', event.target.value, this.searchResult);
  }
}
