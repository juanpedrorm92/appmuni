import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController} from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController ,private susuario: UsuarioProvider,public navParams: NavParams, private menuCtrl: MenuController) {
    this.susuario.get_usuarios()
    this.susuario.cargar_estab();
    this.susuario.cargar_cars();
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  mostrarMenu(){

    this.menuCtrl.toggle();

  }

}
