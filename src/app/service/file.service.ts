import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class fileService {

  private basiURL: string = 'http://localhost:8080/file';

  constructor(
    private http: HttpClient,
  ) { }
}
