import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  getPractiques(): Observable<Practica[]> {
    return this.firestore.collection<Practica>("practiques").valueChanges({idField: 'id'});
  }
  afegirPractica(practica: Practica) {
    this.firestore.collection("practiques").add ({
      titol: practica.titol,
      contingut: practica.contingut,
      tag: practica.tag,
      dataexercici: practica.dataexercici
    });
  }
  eliminarPractica(id: string) {
    this.firestore.collection<Practica>("practiques").doc(id).delete();
  }
  modificarPractica(id: string, practica: Practica) {
    this.firestore.collection("practiques").doc(id).update ({
    titol: practica.titol,
    contingut: practica.contingut,
    tag: practica.tag,
    dataexercici: practica.dataexercici
    });
  }

  checkAllowedUser(email: string): Observable<any[]> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any) {
    return ref.where("email","==", email);
      
  }
}
