import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@ Injectable ({
  providedIn:'root'
})

  export class ClimaTempoService {
    constructor(private httpClient:HttpClient) { }

    getTabelaClimaTempo() : Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ${this.key}'

    });

   const requestOptions = { headers: headers};
    return this.httpClient.get<any>('http://localhost:1880/testechange', requestOptions);

  }

  }
