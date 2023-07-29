import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AllFormationsComponent } from './all-formations/all-formations.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NavBlackComponent } from './nav-black/nav-black.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AcceuilComponent,
    AllFormationsComponent,
    DetailFormationComponent,
    FooterComponent,
    NavComponent,
    NavBlackComponent,
    ListeFormationComponent,
    ProfileUserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
