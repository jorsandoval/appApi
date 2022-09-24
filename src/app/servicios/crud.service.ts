import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() {

    async inicio(){
      await this.storage.create();
      await this.storage.set('personas',this.arreglo)
    }

    mostrar(){
      this.storage.get('personas').then(
        (valor) => {
          console.log(valor);
        }
      )
    }

    async agregarPersona(data; any){
      let personas = await this.storage.get('personas');
      personas.push(data)
      await this.storage.set('personas',persona)
    }
  }
}
