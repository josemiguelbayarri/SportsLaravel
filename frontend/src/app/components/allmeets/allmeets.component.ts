import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-allmeets',
  templateUrl: './allmeets.component.html',
  styleUrls: ['./allmeets.component.css']
})
export class AllmeetsComponent implements OnInit {
  ViewAppointments: object;
  constructor(public AppointmentService:AppointmentService) { }
  ngOnInit() {
    this.AppointmentService.getAppointments()
    .subscribe(
      res => this.ViewAppointments = res,
      error => console.error(error),
      () => console.log(this.ViewAppointments),
    )
  }
  getAppointments(): Appointment[] {
    return this.AppointmentService.getAppointmentsB();
  }
  

}
