import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public practiques: Practica[];
  public practica: Practica;
  public idx: number;
  constructor(private firebd: FirebasedbService, private activateRoute: ActivatedRoute, private router: Router) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null) {
          this.router.navigate(["/practiques"])
        } else {
          this.idx = Number(params['id']);
          this.firebd.getPractiques().subscribe(
            (originalPractica: Practica[]) => {
              this.practica = originalPractica[this.idx];
            }
          )
        }
      }
    );
  }
  ngOnInit(): void {
  }
  modificarPractica(i: number) {
    console.log(this.practica)
    this.firebd.modificarPractica(this.practica.id, this.practica);
    this.router.navigate(["privat"]);
  }
}
