import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-privat',
  templateUrl: './privat.component.html',
  styleUrls: ['./privat.component.css']
})
export class PrivatComponent implements OnInit {

  public practiques: Practica[];
  public practicaDetalls: Practica;
  public user: firebase.User;
  constructor(private firebd: FirebasedbService, private router: Router, private fireauth: FirebaseauthService) { 
    this.firebd.getPractiques().subscribe(
      (originalPractica: Practica[]) => {
        this.practiques = originalPractica;
      }
    );
    this.practicaDetalls = new Practica();
  }

  veureDetalls(i:number) {
    this.practicaDetalls = this.practiques[i];
  }

  eliminarPractica(i: number){
    this.firebd.eliminarPractica(this.practiques[i].id);
  }

  modificarPractica(i: number) {
    this.practicaDetalls = this.practiques[i];
    this.router.navigate(["modificar", i]);
  }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
      }
    )
  }
  desconectar() {
    this.fireauth.desconectar();
    this.router.navigate(['/public']);
  }

}
