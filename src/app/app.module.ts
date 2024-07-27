import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Buttontype1Component } from './buttontype1/buttontype1.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LkrFormatterPipe } from './pipes/lkr-formatter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TosComponent } from './components/tos/tos.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Buttontype1Component,
    ProductListComponent,
    LkrFormatterPipe,
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    PolicyComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
