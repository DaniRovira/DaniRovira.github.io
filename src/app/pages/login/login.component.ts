import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: boolean = false;
  public allowedUserError: boolean = false;

  constructor(private fireauth: FirebaseauthService, private firestore: FirebasedbService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        let email = user.user.email;
        this.firestore.checkAllowedUser(email).pipe(take(1)).subscribe(
          (originalEmails : any[])=>{
            if(originalEmails.length==1){
              this.loginError = false;
              this.allowedUserError = false;
              this.router.navigate(['/privat']);
            } else{
               this.loginError = true;
               this.allowedUserError= true;
               this.fireauth.desconectar();
            }
          }
        );
      }
    ) .catch(
      (error: any) => {

      }
    )
  }

}
