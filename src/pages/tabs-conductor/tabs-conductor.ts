import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConductorPage } from "../conductor/conductor";
import { EstadoRutaPage } from "../estado-ruta/estado-ruta";
import { MantencionesPage } from "../mantenciones/mantenciones";
import { RutaPage } from '../ruta/ruta';

/**
 * Generated class for the TabsConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-conductor',
  templateUrl: 'tabs-conductor.html',
})
export class TabsConductorPage {

  
  estadoRuta:any;
  mant:any;
  ruta:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
    this.estadoRuta=EstadoRutaPage;
    this.mant=MantencionesPage;
    this.ruta=RutaPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsConductorPage');
  }

}
