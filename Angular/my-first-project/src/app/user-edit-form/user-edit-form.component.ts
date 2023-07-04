import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';

type UserWithoutFieldsInterface = Omit<UserInterface, "address" | "geo" | "company">;

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent {
  @Input() user: UserInterface | null = null;
  @Input() editFields: Array<keyof UserWithoutFieldsInterface> = [];
}
