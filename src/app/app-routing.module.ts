import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FieldComponent } from './components/field/field.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { Paintings2012to2016Component } from './paintingsComponents/paintings2012to2016/paintings2012to2016.component';
import { EarlyWorkComponent } from './paintingsComponents/early-work/early-work.component';
import { Paintings2002to2011Component } from './paintingsComponents/paintings2002to2011/paintings2002to2011.component';
import { Paintings2017to2018Component } from './paintingsComponents/paintings2017to2018/paintings2017to2018.component';
import { PortraitsComponent } from './paintingsComponents/portraits/portraits.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'paintings2012to2016', component:Paintings2012to2016Component },
  { path: 'earlywork', component: EarlyWorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'field', component: FieldComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'paintings2002to2011', component: Paintings2002to2011Component },
  { path: 'paintings2017to2018', component: Paintings2017to2018Component },
  { path: 'portraits', component: PortraitsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
