import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
const baseUrl='http://localhost:8088/marketplaceapi/v1/users'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  id:any;

  constructor(private http:HttpClient) { }

  findByUid(userid: any): Observable<any> {

    this.id = this.http.get(`${baseUrl}/${userid}`);
    return this.id;
  }

}

