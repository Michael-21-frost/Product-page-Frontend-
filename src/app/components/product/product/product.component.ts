import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ViewChild } from '@angular/core';
import { PricePipe } from '../../../pipe/price.pipe';
import { TruncateNamePipe } from '../../../pipe/truncate-name.pipe';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RatingModule, ButtonModule,  ConfirmPopupModule, ToastModule, PricePipe,
TruncateNamePipe,],
  providers:[ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  constructor(private confirmationservice: ConfirmationService){

  }
  @ViewChild('deleteButton') deleteButton: any;
  //to allow this component to inherit another component objects using the input decorator
  @Input() product! : Product;
  //send out the component and instantiate it
  @Output()edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct(){
    this.edit.emit(this.product);
  }
  confirmDelete() {
    this.confirmationservice.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.deleteProduct();
      },
    });
  }

  deleteProduct(){
    this.delete.emit(this.product);

  }

  ngOnInit(){
     
  }

}
