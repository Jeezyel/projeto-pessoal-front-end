import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private basiURL: string = 'http://localhost:8080/file';

  constructor(
    private http: HttpClient,
  ) { }

  findAll():Observable<Usuario[]>{
  /** // caso queira colocar paginação 
  * findAll(page?: number, pageSize?: number): Observable<Estado[]> {
    
    let params = {};

    if (page !== undefined && pageSize !== undefined) {
      params = {
        page: page.toString(),
        pageSize: pageSize.toString()
      }
    }*/

    return this.http.get<Usuario[]>(`${this.basiURL}/getAll`);

  }
}
