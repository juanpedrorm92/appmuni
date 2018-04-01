import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { ImagenesProvider } from "../../providers/imagenes/imagenes";
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from "../../providers/login/login";
import { AlertController } from "ionic-angular";




/**
 * Generated class for the InsertUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-user',
  templateUrl: 'insert-user.html',
})
export class InsertUserPage {
  //datos de usuario

  

  rut:string="";
  token:string="";
  nombre:string="";
  apellidoP:string="";
  apellidoM:string="";
  direccion:string="";
  user:string="";
  pass:string="";

  establecimientos:string="";
  
  cod_estab:any;
  vehiculos:string="";
  
  asignacion_vehiculo:string="";
  priv:string="";

  langs;
  langForm;


  constructor(public navCtrl: NavController,private menuCtrl: MenuController ,private alertCtrl: AlertController ,private slogin:LoginService ,private iservices: ImagenesProvider, public navParams: NavParams, private susuario:UsuarioProvider) {
    
    
   
    
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'admin', disabled: false})
   });
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertUserPage');
  }


  radio(event) {

    this.priv=this.langForm.value['langs'];
        
    event.preventDefault();
  }


  grabar(){
    this.radio(event);
    this.asignar_establecimiento(this.establecimientos);

  

    this.susuario.registro_user(
    this.rut,
    this.nombre, 
    this.apellidoP, 
    this.apellidoM, 
    this.direccion, 
    this.user,
    this.pass,
    this.priv,
    this.cod_estab,
    this.asignacion_vehiculo="null"
      );

 
  }

  asignar_establecimiento(recinto:string){

    let establecimiento:string[]=[];
    
    for(let estab of this.susuario.select_estab){
      establecimiento.push(estab.nombre_establecimiento);

    }

    for(let i=0;i<establecimiento.length;i++){

      if(recinto == establecimiento[i]){

        this.cod_estab=i+1;
       // console.log(this.cod_estab);

      }

    }



  }
  
  mostrarMenu(){

    this.menuCtrl.toggle();


  }



}
