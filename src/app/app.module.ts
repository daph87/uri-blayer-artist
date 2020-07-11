import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { FieldComponent } from './components/field/field.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { Paintings2002to2011Component } from './paintingsComponents/paintings2002to2011/paintings2002to2011.component';
import { Paintings2012to2016Component } from './paintingsComponents/paintings2012to2016/paintings2012to2016.component';
import { Paintings2017to2018Component } from './paintingsComponents/paintings2017to2018/paintings2017to2018.component';
import { EarlyWorkComponent } from './paintingsComponents/early-work/early-work.component';
import { PortraitsComponent } from './paintingsComponents/portraits/portraits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { environment } from 'src/environnement/environnement.prod';
import { Paintings2019to2020Component } from './paintingsComponents/paintings2019to2020/paintings2019to2020.component';
import { AboutComponent } from './components/about/about.component';

// environment.firebase
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FieldComponent,
    Page404Component,
    ArticlesComponent, 
    EarlyWorkComponent, 
    Paintings2002to2011Component, 
    Paintings2017to2018Component, 
    Paintings2012to2016Component,
    PortraitsComponent,
    Paintings2019to2020Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule,
    AngularFirestoreModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
