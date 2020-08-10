import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private userService: UserService) { }
  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.userService.setUser(user);
  }
}
