import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerAppComponent } from './passenger-app/passenger-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';

const myRoutes:Routes = [
  {
    path:"",
    component:PassengerAppComponent
  },
  {
    path:"us",
    component:UsPublicDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"shopping",
    component:ShoppingComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerAppComponent,
    NavbarComponent,
    UsPublicDataComponent,
    UserInfoComponent,
    ShoppingComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
