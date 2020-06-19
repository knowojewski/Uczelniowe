import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GamesComponent } from './games/games.component';
import { ForumComponent } from './forum/forum.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { CategoryGamesComponent } from './games/category-games/category-games.component';
import { ThreadComponent } from './forum/thread/thread.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'games', component: GamesComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'games/:name', component: CategoryGamesComponent},
  {path: 'games/:name/:id', component: GameDetailsComponent},
  {path: 'forum/thread', component: ThreadComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
