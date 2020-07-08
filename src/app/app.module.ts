import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { Paintings2012to2016Component } from './components/paintingsComponents/paintings2012to2016/paintings2012to2016.component';
import { EarlyWorkComponent } from './components/paintingsComponents/early-work/early-work.component';
import { Paintings2002to2011Component } from './components/paintingsComponents/paintings2002to2011/paintings2002to2011.component';
import { FieldComponent } from './components/field/field.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { Paintings2017to2018Component } from './components/paintingsComponents/paintings2017to2018/paintings2017to2018.component';
import { PortraitsComponent } from './components/paintingsComponents/portraits/portraits.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Paintings2012to2016Component,
    AboutComponent,
    ContactComponent,
    FieldComponent,
    Page404Component,
    ArticlesComponent, 
    EarlyWorkComponent, Paintings2002to2011Component, Paintings2017to2018Component, PortraitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
