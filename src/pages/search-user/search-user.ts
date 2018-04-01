import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,ModalController } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { EditUsuarioPage } from "../edit-usuario/edit-usuario";
import { InsertUserPage } from "../insert-user/insert-user";




/**
 * Generated class for the SearchUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  datos_user:any[];

  

  constructor(public navCtrl: NavController,private susuario: UsuarioProvider ,private modalCtrl:ModalController,public navParams: NavParams, private menuCtrl: MenuController) {
  
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchUserPage');
  }

  mostrarMenu(){

    this.menuCtrl.toggle();

  }

  ver_edit(rut:any, nombre:any, apellido_pat:any, apellido_mat:any, direccion:any, usuario:any, pass:any, privilegio:any, id_estab:any, veh_asignado:any){

    this.datos_user=[{

      Rut: rut,
      Nombre: nombre,
      Apellido_pat: apellido_pat,
      Apellido_mat: apellido_mat,
      Direccion: direccion,
      Usuario: usuario,
      Pass: pass,
      Privilegios: privilegio,
      Id_estab: id_estab,
      Veh_asignado: veh_asignado

    }];
  
    let modal= this.modalCtrl.create(EditUsuarioPage,{datos:this.datos_user});
    modal.present();

    

    
    
  }

}
