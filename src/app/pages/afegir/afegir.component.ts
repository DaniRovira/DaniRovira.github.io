import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-afegir',
  templateUrl: './afegir.component.html',
  styleUrls: ['./afegir.component.css']
})
export class AfegirComponent implements OnInit {

  public practica: Practica;
  constructor(private firestore: AngularFirestore, private firebd: FirebasedbService, private router: Router) {
    this.practica = new Practica();
    }
  ngOnInit(): void {
  }

  afegirPractica() {
    console.log(this.practica)
    this.firebd.afegirPractica(this.practica);
    this.router.navigate(["privat"]);
  }

}
