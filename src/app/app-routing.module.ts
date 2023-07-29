import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { NavComponent } from './nav/nav.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { AllFormationsComponent } from './all-formations/all-formations.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileUserComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'nav',component:NavComponent},
  {path:'accueil',component: AcceuilComponent},
  {path:'detail-formation',component: DetailFormationComponent},
  {path:'detail-formation/:id',component: DetailFormationComponent},
  {path:'liste-formation',component:ListeFormationComponent},
  {path:'all-formation',component:AllFormationsComponent},
  {path:'liste-formation/:id',component:ListeFormationComponent},
  {path:'liste-formation-white/:id',component:ListeFormationComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
