import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { Recent2003Component } from './paintingsComponents/recent2003/recent2003.component';
import { Since97to2002Component } from './paintingsComponents/since97to2002/since97to2002.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FieldComponent } from './paintingsComponents/field/field.component';
import { Page404Component } from './components/page404/page404.component';
import { ArticlesComponent } from './paintingsComponents/articles/articles.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Recent2003Component,
    Since97to2002Component,
    AboutComponent,
    ContactComponent,
    FieldComponent,
    Page404Component,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
