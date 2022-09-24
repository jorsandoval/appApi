import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PrimerServicioService } from '../service/primer-servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataApi : any;
  usuarios= [];

  constructor(
    private primerServicio: PrimerServicioService, private router: Router){}

  ngOnInit(){
    this.primerServicio.getAll().subscribe ( ( data: any ) => {
        this.dataApi = data.results; }
    );
  }

  verPersonaje(id:number){
    this.router.navigate(['characterid',id]);
  }

}
