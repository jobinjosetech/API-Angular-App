import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerAppComponent } from './passenger-app/passenger-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';

const myRoutes:Routes = [
  {
    path:"",
    component:PassengerAppComponent
  },
  {
    path:"us",
    component:UsPublicDataComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerAppComponent,
    NavbarComponent,
    UsPublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
