import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://openlibrary.org/search.json?q=bestsellers&limit=20'; // URL da sua API

  constructor(private http: HttpClient) { }

  // Método para obter dados da API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}