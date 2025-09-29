import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  //private baseUrl='http://localhost:8080/api/tareas';
  //http://localhost:4200/tareas
  private baseUrl = environment.api;

  constructor(private http:HttpClient) { }

  getAllTareas():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas`);
  }

  getTareaById(id:number):Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseUrl}/tareas/${id}`);
  }

  createTarea(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(`${this.baseUrl}/tareas`,tarea);
  }

  updateTarea(id:number,tarea:Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(`${this.baseUrl}/tareas/${id}`,tarea);
  }

  deleteTarea(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/tareas/${id}`);
  }

}
