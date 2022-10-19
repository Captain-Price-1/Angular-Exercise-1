import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AsyncdemoService {
  constructor(private http: HttpClient) {}
  getInfo() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
