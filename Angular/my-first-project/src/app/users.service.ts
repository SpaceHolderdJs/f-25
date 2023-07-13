import { Injectable } from '@angular/core';
import { UserInterface } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<UserInterface> = [];
  searchResult: Array<UserInterface> = [];
  sortedUsers: Array<UserInterface> = [];

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
        const sorted = this.sortUsers();
        console.log(sorted, '!!!sorted');
      });
  }

  searchUsers(
    value: string,
    searchCriterias: Array<
      keyof Omit<UserInterface, 'geo' | 'address' | 'company'>
    >
  ) {
    this.searchResult = this.users.filter((user) => {
      return searchCriterias.some((key) =>
        user[key].toString().includes(value)
      );
    });
  }

  sortUsers(isAlphabetic: boolean = true) {
    this.sortedUsers = [...this.users].sort((user1, user2) =>
      isAlphabetic
        ? user1.name.localeCompare(user2.name)
        : user2.name.localeCompare(user1.name)
    );
    return this.sortedUsers;
  }
}
