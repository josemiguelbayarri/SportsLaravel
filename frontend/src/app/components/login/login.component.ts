import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Credentials } from 'src/app/intefaces/credentials';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public userService: UserService, private router:Router) { }
  login(loginForm: NgForm): void {
    if(loginForm.valid) {
      const credentials: Credentials = loginForm.value;
      this.userService.login(credentials)
      .subscribe(res => {
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.userService.setUser(res.user);
        this.router.navigate(['/']);
      }, error => {
        console.log('error');
      });
    }
  }
}