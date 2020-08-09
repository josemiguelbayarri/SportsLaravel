import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { LoginComponent } from './components/login/login.component';
import { AllmeetsComponent } from './components/allmeets/allmeets.component';





const routes: Routes = [
  {path:"appointment", component: AppointmentComponent},
  {path:"", component: HomeComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"actividades", component: ActividadesComponent},
  {path:"login", component: LoginComponent},
  {path:"allmeets", component: AllmeetsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
