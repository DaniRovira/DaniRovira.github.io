import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

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
