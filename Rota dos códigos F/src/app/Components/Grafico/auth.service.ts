import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 private baseUrl = 'http://localhost:1880/testechange';

  constructor(private http: HttpClient) {}

  cryptoData() {

    const url = 'http://localhost:1880/testechange';
    return this.http
      .get(url)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}









