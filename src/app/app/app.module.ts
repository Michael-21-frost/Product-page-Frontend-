import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home/home.component';
import { provideHttpClient,  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../components/layout/header/header/header.component';
import { FooterComponent } from '../components/layout/footer/footer/footer.component';
import { ProductComponent } from '../components/product/product/product.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    
   
    

  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
   
    
  

    
  ],
  providers: [provideHttpClient()],


 
})
export class AppModule {

}