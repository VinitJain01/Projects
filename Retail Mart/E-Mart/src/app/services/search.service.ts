import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl='http://localhost:8088/marketplaceapi/v1/products';
const baseUrlasc='http://localhost:8088/marketplaceapi/v1/products/Asc';
const baseUrldesc='http://localhost:8088/marketplaceapi/v1/products/desc';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  

  findbyName(word:any):Observable<any>{
    return this.http.get(`${baseUrl}/${word}`);
  }

  findbyAscOrder():Observable<any>{
    return this.http.get(`${baseUrlasc}`);
  }

  findbyDescOrder():Observable<any>{
    return this.http.get(`${baseUrldesc}`);
  }

  findbybothasc(brand:any):Observable<any>{
    return this.http.get(`${baseUrlasc}/${brand}`);
  }

  findbybothdesc(brand:any):Observable<any>{
    return this.http.get(`${baseUrldesc}/${brand}`);
  }

}

