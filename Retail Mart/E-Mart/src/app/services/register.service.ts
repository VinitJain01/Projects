import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
 
const baseUrl='http://localhost:8088/marketplaceapi/v1/users'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}

