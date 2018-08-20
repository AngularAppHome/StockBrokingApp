import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GpsComponent } from './components/gps/gps.component';
import { MutualfundComponent } from './components/mutualfund/mutualfund.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    PageNotFoundComponent,
    GpsComponent,
    MutualfundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
