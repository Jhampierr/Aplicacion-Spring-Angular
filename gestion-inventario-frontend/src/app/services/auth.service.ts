import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.api;
  
  constructor(private http:HttpClient, private router:Router) { }

  login(username: string, password: string):Observable<any>{
    /*if(!this.http){
      throw new Error('Http client no inicializado')
    }*/
    return this.http.post<any>(`${this.baseUrl}/auth/login`,{username, password})
      .pipe(
        tap(response => {
          console.log('Respuesta del servidor: ', response)
        }),
        map(response => {
          if(response && response.token){
            localStorage.setItem('token', response.token);
            return response;
          }
          else{
            throw new Error ('No se recibio un token de acceso valido en la respuesta del servidor')
          }
        }),
        catchError(error => {
          console.log("Error en la solicitud", error)
          return throwError(() => error);
        })
      )
  }

  register(username: string, password: string):Observable<any>{
    if(!this.http){
      throw new Error('Http client no inicializado')
    }
    return this.http.post<any>(`${this.baseUrl}/auth/registro`,{username, password})
    ?.pipe(
      catchError(this.handleError)
        /*error => {
          console.log('Error en la solicitud', error)
          return throwError(() => error);
        }*/
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated():boolean {
    //const token = this.getToken();
    return !!this.getToken();
  }

  handleError(error:any){
    console.log('Error en la solicitud: ', error)
    return throwError(() => error);
  }


}
