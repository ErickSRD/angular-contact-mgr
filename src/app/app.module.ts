import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componets/navbar/navbar.component';
import { ContactManagerComponent } from './Componets/contact-manager/contact-manager.component';
import { AddContactComponent } from './Componets/add-contact/add-contact.component';
import { EditContactComponent } from './Componets/edit-contact/edit-contact.component';
import { ViewContactComponent } from './Componets/view-contact/view-contact.component';
import { SpinnerComponent } from './Componets/spinner/spinner.component';
import { PageNotFoundComponent } from './Componets/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
