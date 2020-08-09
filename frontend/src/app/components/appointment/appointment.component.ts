import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  errorMsg: string;
  constructor(public appointmentService: AppointmentService, private router:Router) {
   }
  create(appointmentForm: NgForm): void {
    console.log(appointmentForm);
    if (!appointmentForm.valid) {
      setTimeout(() => this.errorMsg = '', 2500);
      this.errorMsg = 'Revisa tus campos';
      return;
    }
    const appointment: Appointment = appointmentForm.value;
    this.appointmentService.create(appointment)
      .subscribe(res => {
        console.log(res);
      }, function (error) {
        console.log(error);
      });
    this.router.navigate(['']);
  }
}