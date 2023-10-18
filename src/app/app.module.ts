import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectedproductComponent } from './selectedproduct/selectedproduct.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    ErrorComponent,
    SelectedproductComponent,
    ListproduitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
