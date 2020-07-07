import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Recent2003Component } from './paintingsComponents/recent2003/recent2003.component';
import { Since97to2002Component } from './paintingsComponents/since97to2002/since97to2002.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FieldComponent } from './paintingsComponents/field/field.component';
import { ArticlesComponent } from './paintingsComponents/articles/articles.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recent2003', component: Recent2003Component },
  { path: '97to2002', component: Since97to2002Component },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'field', component: FieldComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
