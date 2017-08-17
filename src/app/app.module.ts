import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
