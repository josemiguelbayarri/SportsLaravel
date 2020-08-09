import { Injectable } from '@angular/core';//Importación por defecto de angular
import { HttpClient, HttpHeaders } from '@angular/common/http';//Importación por defecto de angular
import { environment } from '../../environments/environment'//llamando al archivo environment mediante su ruta para conectar con el backend
import { User } from '../models/user.model';//llamando al archivo user mediante su ruta para traer los subparametros de usuario del backend (name, email y password)
import { Login } from '../intefaces/login';//llamando al archivo login que nos trae los parametros user y token
import { Credentials } from '../intefaces/credentials';//llamando al archivo credentials que nos trae el email y el password
import { Observable } from 'rxjs';//declaración que no se ejecuta hasta que alguien se suscribe
@Injectable({
  providedIn: 'root'
})
export class UserService {//exportar la logica de este archivo
  API_URL: string = environment.API_URL;//definimos la url de nuestro proyecto que a su vez esta en el archivo environment
  private user: User;//------------------------------------------------------------------ 
  constructor(private httpClient: HttpClient) { }//------------------------------------------------------

  register(user: User): Observable<User> {//funcion para el registro de usuarios
    console.log(user);
    return this.httpClient.post<User>(this.API_URL + '/api/auth/signup', user);//ruta en el backend para traer el endpoint
  }
  login(credentials: Credentials): Observable<Login> {//función para el login de usuarios
    return this.httpClient.post<Login>(this.API_URL + '/api/auth/login', credentials);//ruta en el backend para traer el endpoint
  }
  setUser(user: User): void {//poner usuario---------------------------------------------------------
    this.user = user;
  }
  getUser(): User {//traerte a ese usuario-----------------------------------------------------------
    return this.user;
  }

  logout(): void {//salir de un sesion de usuario
    this.httpClient.get(this.API_URL + '/api/auth/logout',{//endpoint del backend para salir de una sesion de usuario
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('authToken')//----------------------------------------------------------------
      }
    }).subscribe(console.log);//------------------------------------------------------------------------
    this.setUser(null);//---------------------------------------------------------------------
    localStorage.removeItem('user');//quitamos el usuario de localstorage
    localStorage.removeItem('authToken');//quitamos el token de localstorage
  }
}