import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { isTab } from 'ionic-angular/navigation/nav-util';
import { UsuarioProvider } from "../../providers/usuario/usuario";


/**
 * Generated class for the EditUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-usuario',
  templateUrl: 'edit-usuario.html',
})
export class EditUsuarioPage {

  //ngModel

  rut_update: string;
  nombre_update: string;
  apellidoP_update: string;
  apellidoM_update: string;
  direccion_update: string;

  user_update: string;
  pass_update: string;







  ///////////////////////////////





  datos_user: any[] = [];
  priv:any;
  
  privilegio: any;
  establecimientos: string;
  vehiculos: string;
  cod_estab: any;


  radio1: boolean = false;


  langs;
  langForm;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private uservice: UsuarioProvider, private viewCtrl: ViewController, public navParams: NavParams) {




    // desde el buscador de usuario, recibo la informacion de cada personaje seleccionado 
    this.datos_user = this.navParams.get("datos");



    //aqui filtro si el usuario tiene privilegios de administrador 
    for (let get_datos of this.datos_user) {

      //rescato el establecimiento para ponerlo por defecto 
      this.establecimientos = get_datos.Id_estab;


      if (get_datos.Privilegios == "Administrador") {

        this.privilegio = 'admin';
      }
      if (get_datos.Privilegios == "Usuario") {

        this.privilegio = 'chofer';
      }


    }


    this.langForm = new FormGroup({


      "langs": new FormControl({ value: this.privilegio, disabled: false })
    });





  }


  radio(event) {

    this.priv = this.langForm.value['langs'];

    event.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUsuarioPage');


  }

  modificar() {

    let alert = this.alertCtrl.create({
      title: "Confirmacion",
      subTitle: "Estas seguro que deseas editar la información?",
      buttons: [{
        text: 'Aceptar',
        handler: data => {
          //llamo al metodo radio para capturar su evento y ver que privilegio tiens 
          this.radio(event);
          if (this.priv == "chofer") {
            this.priv = 2;
          } else {
            this.priv = 1;
          }
          //llamo al metodo 
          this.asignar_establecimiento(this.establecimientos);

          this.uservice.update_user(
              this.rut_update,
              this.nombre_update,
              this.apellidoP_update,
              this.apellidoM_update,
              this.direccion_update,
              this.user_update,
              this.pass_update,
              this.priv,
              this.cod_estab);

        }
      },
      {
        text: 'Cancelar',
        handler: data => {
          console.log("Cancel clicked");
        }
      }]

    });
    alert.present();


  }

  asignar_establecimiento(recinto: string) {

    let establecimiento: string[] = [];

    for (let estab of this.uservice.select_estab) {
      establecimiento.push(estab.nombre_establecimiento);

    }

    for (let i = 0; i < establecimiento.length; i++) {

      if (recinto == establecimiento[i]) {

        this.cod_estab = i + 1;
        // console.log(this.cod_estab);

      }

    }



  }






}
