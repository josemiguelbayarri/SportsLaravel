import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitasComponent } from './components/citas/citas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  {path:"citas", component: CitasComponent},
  {path:"", component: HomeComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"actividades", component: ActividadesComponent},
  {path:"login", component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
