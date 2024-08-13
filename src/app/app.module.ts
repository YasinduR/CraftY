import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LkrFormatterPipe } from './pipes/lkr-formatter.pipe';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TosComponent } from './components/tos/tos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginRequiredPopUpComponent } from './components/login-required-pop-up/login-required-pop-up.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpCompleteComponent } from './components/sign-up-complete/sign-up-complete.component';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LkrFormatterPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    PolicyComponent,
    TosComponent,
    ProductDetailsComponent,
    LoginComponent,
    ProfileComponent,
    CartComponent,
    LoginRequiredPopUpComponent,
    SignUpComponent,
    SignUpCompleteComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
