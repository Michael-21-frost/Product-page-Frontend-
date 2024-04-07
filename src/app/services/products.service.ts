import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //----------------REST API INSTANTIATOR------------------

  constructor(private apiService: ApiService) { }
  //this is a method to call the apiservice requests to instantiate the object 
  //get method -- to get products
    getProducts(url: string, params:PaginationParams):Observable<Products>{
      return this.apiService.get(url, {
        params,
        responseType: 'json',
      
      });
    

    };

    //post method to create a product 
    addProduct = (url: string, body: any):Observable<any>=>{
      return this.apiService.post(url, body, {});

    };

    //put method to update a product
    editProduct =(url: string, body: any):Observable<any>=>{
      return this.apiService.put(url, body, {});
    }

    //delete method to delete a product
    deleteProduct=(url: string):Observable<any>=>{
      return this.apiService.delete(url, {})
      
    }





    
}

