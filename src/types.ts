import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options{
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        context?: HttpContext;
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        transferCache?:{
            includeHeaders?: string[];
        } | boolean;
    }

    //products params to encapsulate and display server request
export interface Products{
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;

}
//per product param to to display server request
export interface Product{
    id?:number;
    price: string;
    name: string;
    image: string;
    rating: number;

}
export interface PaginationParams{
    [param:string]:string | number | boolean | ReadonlyArray<string | number | boolean >;
    page : number;
    perPage: number;
}