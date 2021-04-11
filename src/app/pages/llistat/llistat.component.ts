import { Component, OnInit } from '@angular/core';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.css']
})
export class LlistatComponent implements OnInit {

  

  public practiques: Practica[];
  public practicaDetalls: Practica;
  constructor(private firebd: FirebasedbService, private router: Router) { 
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
  }

}
