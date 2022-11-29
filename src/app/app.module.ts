import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerAppComponent } from './passenger-app/passenger-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';

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
