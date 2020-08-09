import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, NgForm} from "@angular/forms";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService, private router:Router
  )
  {}
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }

/* let cerrar = false; */

  register(registerForm:NgForm):void{
    const user: User = registerForm.value
    this.userService.register(user)
      .subscribe(res=>{
        /* cerrar = true;
        if(cerrar){
          //revisar
        } */
        console.log (res)
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500)
      })
  }

  getUser(): User {
    return this.userService.getUser();
  }
  logout(): void {
    this.userService.logout();
    this.userService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
