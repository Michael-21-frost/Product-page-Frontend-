import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //--------------REST API OBJECT---------------------
  constructor(private httpClient: HttpClient) 
  { }
  //creating a get request to communicate with the server
  get<T>(url: string, options: Options ):Observable<T>{
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
//put method --create
  post<T>(url: string, body:Product, options: Options ):Observable<T>{
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }
  //post method --update / edit  
  put<T>(url: string, body:Product, options: Options ):Observable<T>{
    return this.httpClient.put<T>(url, body,  options) as Observable<T>;
  }
  //delete method --remove
  delete<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.delete<T>(url, options) as Observable<T>;
  }
  
 
  




}

