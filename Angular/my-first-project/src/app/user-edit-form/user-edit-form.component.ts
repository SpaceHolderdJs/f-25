import { Component, Input, OnInit } from '@angular/core';
import { AddressInterface, CompanyIntreface, GeoInterface, UserInterface } from 'src/types';
import { UsersService } from '../users.service';

type UnionUserType = keyof UserInterface | keyof AddressInterface | keyof GeoInterface | keyof CompanyIntreface

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {
  @Input() user: UserInterface | null = null;
  @Input() editFields: Array<UnionUserType> = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.editFields = this.editFields.map((key) => this.getDataFromUserFields(key)).flat() as any;

  }

  onInput(event: Event) {
    const input = event.target! as HTMLInputElement;
    const inputName = input.name as keyof UserInterface;

    this.user![inputName] = input.value as never;
    console.log("USER", this.user);
    console.log("USERS", this.usersService.users);
  }

  getDataFromUserFields(key: UnionUserType) {
    const value = this.user![key as keyof UserInterface] || null;

    if (value && typeof value === "object") {
      return Object.keys(value);
    }

    return key;
  }

  // TODO: Finish getting of user fields
  getFieldUserData() { }
}
