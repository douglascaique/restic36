import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getShoppingList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/shopping-list`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/shopping-list`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/shopping-list/${id}`);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/shopping-list/${task.id}`, task);
  }
}
