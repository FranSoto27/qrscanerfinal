import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root',
})

export class DataLocalService {
  constructor(private navCtrl: NavController) {}

// genero un arr
guardados: Registro[] = [];


  async guardarRegistro(format: string, content: string) {

    const nuevoRegistro = new Registro(format, content);
    // TODO: Tarea 1 -- guardar registro en la memoria del equipo
      this.guardados.unshift (nuevoRegistro);

      console.log(this.guardados);

      

    // pluggin del storage de noticias. 


    this.abrirRegistro(nuevoRegistro);
  }

  abrirRegistro(registro: Registro) {
    switch (registro.type) {
      case 'http':
        console.log('url:', registro);
        // TODO: Tarea 2 -- Abrir el registro en el navegador nativo del device

      // const browser = this.iab.create(registro.content);
      // browser.show();  

        break;

      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.content}`);
        console.log('geo:', registro);
        // Abrir el mapa

        // TODO: Me quede en el minuto 45
        break;

      default:
        break;
    }
  }
}
