import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "brayan.calcina" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      if (username != "brayan.calcina" && password != "password") {
        alert("Usuario y contraseña incorrectos");
      } else {
        if (username != "brayan.calcina") {
          alert("Usuario incorrecto");
          return false;
        } else {
            alert("Contraseña incorrecta");
            return false;
        }
      }
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}