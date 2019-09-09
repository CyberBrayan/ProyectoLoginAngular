import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

declare const esconderMenu: any;

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {
  }

  menu(){
    esconderMenu();
  }

}
