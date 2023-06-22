import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: UserInterface | null = null;

  showUserData() {
    console.log(this.user, "USER");
  }
}