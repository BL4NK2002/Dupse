
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voluntario } from '../voluntario';


@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  private api: string = 'http://localhost:8080/api/voluntarios';

  constructor(private http:HttpClient) { }

  getVoluntarioList():Observable<Voluntario []>{
    return this.http.get<Voluntario[]>(this.api);
  }
  
  createVoluntario(voluntario : Voluntario):Observable<Voluntario>{
    return this.http.post<Voluntario>(this.api,voluntario);
  }

  deleteVoluntarioById(id: number):Observable<any>{
    return this.http.delete(this.api+'/'+id);

  }

  // Método para actualizar un voluntario
  updateVoluntario(voluntario: Voluntario): Observable<Voluntario> {
  const url = `${this.api}/${voluntario.id}`; // URL para actualizar un voluntario específico
  return this.http.put<Voluntario>(url, voluntario);
  }

}
