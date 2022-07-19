import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Products } from '../models/products.model';

const baseUrl = 'http://localhost:8088/marketplaceapi/v1/products';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }
  findAll():Observable<Products[]>{
    return this.http.get<Products[]>(`${baseUrl}`);
  }


}

