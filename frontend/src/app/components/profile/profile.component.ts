import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  AppointmentChoose: object = [];
  constructor(private UserService:UserService, public AppointmentService:AppointmentService) { }
  ngOnInit(){
    this.AppointmentService.getUserAppointments()
    .subscribe(
      res => this.AppointmentChoose = res,
      error => console.error(error),
      () => console.log(this.AppointmentChoose),
    )
  }
  getAppointments(): Appointment[] {
    return this.AppointmentService.getAppointmentsB();
  }
  getUser(): User {
    return this.UserService.getUser();
  }
}