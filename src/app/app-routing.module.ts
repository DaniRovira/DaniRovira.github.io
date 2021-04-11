import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfegirComponent } from './pages/afegir/afegir.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { DesconectarComponent } from './pages/desconectar/desconectar.component';
import { HomeComponent } from './pages/home/home.component';
import { LlistatComponent } from './pages/llistat/llistat.component';
import { LoginComponent } from './pages/login/login.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { PrivatComponent } from './pages/privat/privat.component';
import { PublicComponent } from './pages/public/public.component';
import { AngularFireAuthGuard,redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'privat' , component: PrivatComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'login' , component: LoginComponent,canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToHome}},
  {path: 'desconectar' , component: DesconectarComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'public' , component: PublicComponent},
  {path: 'afegir', component: AfegirComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'modificar', children: [ 
      {path: '', component: ModificarComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
      {path: ':id', component: ModificarComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


