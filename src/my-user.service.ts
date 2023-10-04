import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyUserService {
  constructor() {}

  getUsers() {
    const http = inject(HttpClient);
    return http.get('https://www.balldontlie.io/api/v1/players');
  }
}
