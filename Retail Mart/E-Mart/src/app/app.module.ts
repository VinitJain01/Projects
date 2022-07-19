import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchproductComponent } from './components/searchproduct/searchproduct.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SearchproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
