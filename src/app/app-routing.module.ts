import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { SelectedproductComponent } from './selectedproduct/selectedproduct.component';

const routes: Routes = [
  {path:'accueil', title:'Taleb', component:AccueilComponent},
  { path:'produits', title:'PRODUITS', component:ListproduitsComponent},
  { path:'produits/:idTaleb', title:'JABOU', component:SelectedproductComponent},
  { path:'contact', title:'CONTACT', component:ContactComponent},
  { path:'', redirectTo:'accueil', pathMatch:'full'},
  { path: '**', title:'ERREUR', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
