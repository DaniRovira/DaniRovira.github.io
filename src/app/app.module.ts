import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfegirComponent } from './pages/afegir/afegir.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { LlistatComponent } from './pages/llistat/llistat.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DesconectarComponent } from './pages/desconectar/desconectar.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivatComponent } from './pages/privat/privat.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    AfegirComponent,
    EliminarComponent,
    LlistatComponent,
    HomeComponent,
    CurriculumComponent,
    ModificarComponent,
    LoginComponent,
    DesconectarComponent,
    PublicComponent,
    PrivatComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
