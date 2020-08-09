import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Appointment } from '../models/appointment.model';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  API_URL:string = environment.API_URL;
  public appointment: Appointment;
  public appointments: Appointment[] = [];
  constructor(private HttpClient: HttpClient) { }
  create(appointment: Appointment): Observable<Appointment> {
    console.log(appointment);
    return this.HttpClient.post<Appointment>(this.API_URL + '/api/appointment/create', appointment, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }
  setAppointment(appointment: Appointment):void {
    this.appointment = appointment;
  }
  getAppointment(): Appointment {
    return this.appointment;
  }
  getAppointments():Observable<any> {
    return this.HttpClient.get(this.API_URL+'/api/appointment', {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }
  setAppointments(appointments:Appointment[]):void {
    this.appointments = appointments;
  }
  getAppointmentsB(): Appointment[] {
    return this.appointments;
  }
}