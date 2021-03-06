import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './games/games.component';
import { ForumComponent } from './forum/forum.component';
import { CategoriesComponent } from './games/categories/categories.component';
import { CategoriesMainComponent } from './games/categories-main/categories-main.component';
import { CategoryGamesComponent } from './games/category-games/category-games.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { ThreadComponent } from './forum/thread/thread.component';
import { ThreadDetailsComponent } from './forum/thread-details/thread-details.component';
import { ThreadsNavComponent } from './forum/threads-nav/threads-nav.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GamesComponent,
    ForumComponent,
    CategoriesComponent,
    CategoriesMainComponent,
    CategoryGamesComponent,
    GameDetailsComponent,
    ThreadComponent,
    ThreadDetailsComponent,
    ThreadsNavComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
 }
