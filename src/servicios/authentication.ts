import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication{
    constructor
       (private angularFire : AngularFireAuth){}
            CrearUsuario(email,password){
            this.angularFire.auth.createUserWithEmailAndPassword(email,password)
           }
    
           CrearUsuarioGoogle(){
            let provider = new firebase.auth.GoogleAuthProvider();
            return this.angularFire.auth.signInWithRedirect(provider).then(result =>{return firebase.auth().getRedirectResult;
            });
           }

           CrearUsuarioFacebook(){
            let provider = new firebase.auth.FacebookAuthProvider();
            return this.angularFire.auth.signInWithRedirect(provider).then(result =>{return firebase.auth().getRedirectResult;
            });
           }
    
}