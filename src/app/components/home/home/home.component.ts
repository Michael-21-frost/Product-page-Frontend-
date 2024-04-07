import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product, Products } from '../../../../types';
import { ProductComponent } from '../../product/product/product.component';
import { CommonModule } from '@angular/common';
import {Paginator, PaginatorModule } from 'primeng/paginator'
import { EditPopUpComponent } from '../../dialog/edit-pop-up/edit-pop-up.component';
import { ButtonModule } from 'primeng/button';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[ProductComponent, CommonModule,  PaginatorModule, EditPopUpComponent, ButtonModule],
  standalone: true
})
export class HomeComponent {




  constructor(private productService: ProductsService) { }
  @ViewChild('paginator') paginator: Paginator | undefined;

  products: Product[] = [];
  totalRecords: number=0;
  rows: number=8 ;
  displayEditPopup:boolean=false;
  displayAddPopup:boolean=false;



  //edit popup function
  toggleEditPopup(product:Product){
    this.selectedProduct=product;
    this.displayEditPopup=true;

  }
  //delete popup
  toggleDeletePopup(product: Product) {
    if (!product.id) {
      return;
    }

    this.deleteProduct(product.id);
  }


  //add popup function
  toggleAddPopup(){
    this.displayAddPopup=true;
  }
  selectedProduct: Product={
    id:0,
    name:'',
    image:'',
    price:'',
    rating:0,
  };

  onConfirmEdit(product: Product){
    this.editProduct(product, this.selectedProduct .id ?? 0);
    this.displayEditPopup=false;
  }
  onConfirmAdd(product: Product){
    this.addProduct(product, this.selectedProduct .id ?? 0);
    this.displayAddPopup=false;
  }


  onProductOutput(product: Product) {
    console.log(product, "output");
  }

  //on page change 
  onPageChange(event: any){
    this.fetchProducts(event.page, event.rows);
  }

  resetPaginator() {
    this.paginator?.changePage(0);
  }

  //what happens when page is changed
  // fetching request methods from product service where RESTAPI was instantiated

  //get products
  fetchProducts(page:number, perPage:number){
    this.productService.getProducts('http://localhost:3000/clothes', { page, perPage})
    .subscribe({
      next: (data: Products)=>{
        this.products = data.items;
        this.totalRecords = data.total;
      },
      error:(error) =>{
        console.log(error);
      }
    });


  }

  //update products
  editProduct(product: Product, id:number){
    this.productService.editProduct(`http://localhost:3000/clothes/${id}`, product).subscribe({
      next: (data: Products)=>{
        this.products = data.items;
        this.totalRecords = data.total;
        this.fetchProducts(0, this.rows);
      },
      error:(error) =>{
        console.log(error);
      }

    });

  }

  //remove products
  deleteProduct(id:number){
    this.productService.deleteProduct(`http://localhost:3000/clothes/${id}`).subscribe({
      next: (data: Products)=>{
        this.products = data.items;
        this.totalRecords = data.total;
        this.fetchProducts(0, this.rows);
      },
      error:(error) =>{
        console.log(error);
      }

    });
  }


  //create new product
  addProduct(product: Product, id:number){
    this.productService.addProduct(`http://localhost:3000/clothes/${id}`, product).subscribe({
      next: (data: Products)=>{
        this.products = data.items;
        this.totalRecords = data.total;
        this.fetchProducts(0, this.rows);
      },
      error:(error) =>{
        console.log(error);
      }

    });

  }
  ngOnInit() {
    this.fetchProducts(0, this.rows);
   
  }

 
}
/**
 * next:(data)=>{
 * console.log(data);
 * this.fetchProducts(0,this.rows);
 * },
 * error:(error)=>{
 * console.log(error);
 * }
 * 
 */
