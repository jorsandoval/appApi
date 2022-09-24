import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimerServicioService } from '../service/primer-servicio.service';

@Component({
  selector: 'app-characterid',
  templateUrl: './characterid.page.html',
  styleUrls: ['./characterid.page.scss'],
})
export class CharacteridPage implements OnInit {

  id: number;
  dataApi : any;

  constructor(
    private router: ActivatedRoute, private service: PrimerServicioService ) { }

  ngOnInit(){
    this.id = this.router.snapshot.params.id;
    this.service.getById(this.id).subscribe((data) => {
      this.dataApi = data;
    })
    /* this.service.getById().subscribe((data: any) => {
      this.dataApi = data.results;
    }) */
  }

}
