import { Injectable } from '@angular/core';
import { UserInterface } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<UserInterface> = [];
  searchResult: Array<UserInterface> = [];

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.users = json);
  }

  searchUsers(value: string, searchCriterias: Array<keyof Omit<UserInterface, "geo" | "address" | "company">>) {
    this.searchResult = this.users.filter(
      (user) => {
        return searchCriterias.some((key) => user[key].toString().includes(value))
      }
    );
  }
}
