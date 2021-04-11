import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-desconectar',
  templateUrl: './desconectar.component.html',
  styleUrls: ['./desconectar.component.css']
})
export class DesconectarComponent implements OnInit {

  constructor(private fireauth: FirebaseauthService, private router: Router) { }

  ngOnInit(): void {
  }

  desconectar() {
    this.fireauth.desconectar();
    this.router.navigate(['/public']);
}

}
