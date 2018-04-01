import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICO } from "../../app/config/url.service";
import { Platform } from "ionic-angular";
import {  } from '@ionic/storage';


import 'rxjs/add/operator/map';


import { AlertController } from "ionic-angular";
import { Alert } from 'ionic-angular/components/alert/alert';
import { Storage } from '@ionic/storage/dist/storage';
import { Title } from '@angular/platform-browser/src/browser/title';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginService {

  token:string="";
  id_usuario:string="";
  privilegios:string="";
  nombre:string;


  constructor(public http: HttpClient, private alertCtrl: AlertController, private storage:Storage , private platform: Platform) {
   

    this.cargar_storage();

  }

  activo():boolean{

    if(this.token){

      return true;

    }else{
      return false;
    }



  }

  priv(){

    if(this.privilegios=="1"){

      return "1";
    }if(this.privilegios=="2"){

      return "2";
    }


  }

  ingresar(rut:string, contrasena:string){

   

    let data={
      rut: rut,
      contrasena: contrasena
    };

    let url= URL_SERVICO+"/login";

    //respuesta asincrona

    return this.http.post(url,data).map(resp =>{

      //verificamos si el error viene true o false
      if(resp['error']){
        
        this.alertCtrl.create({

          title:"Error al Iniciar",
          subTitle: resp['mensaje'],
          buttons:["OK"]

        }
        ).present();

      }else{

        this.token=resp['token'];
        this.id_usuario=resp['rut'];
        this.privilegios=resp['privilegios'];
        this.nombre=resp['nombre'];

        

      }
      this.guardar_storage();


    });



  }

  private guardar_storage(){
    
    if(this.platform.is('cordova')){
      //dispositivo 

      this.storage.set("token", this.token);
      this.storage.set("rut", this.id_usuario);
      this.storage.set("privilegios",this.privilegios);
      this.storage.set("nombre",this.nombre);

      console.log(this.token+" "+ this.id_usuario+"  en el storage");

    }else{

      //computadora
      //cuadno cerramos sesion y guradamos en el storage, nos va a guardar un dato vacio
      //hacemos validacion 
      if(this.token){
        localStorage.setItem("token",this.token);
        localStorage.setItem("rut", this.id_usuario);
        localStorage.setItem("privilegios", this.privilegios);
        localStorage.setItem("nombre",this.nombre);

      }else{

        //cuando estoy cerrando sesion, estoy mandando con null por ende tengo que removerlo 

        localStorage.removeItem("token");
        localStorage.removeItem("rut");
        localStorage.removeItem("privilegios");
        localStorage.removeItem("nombre");


      }

      localStorage.setItem("token",this.token);
      localStorage.setItem("rut",this.id_usuario);
      localStorage.setItem("privilegios",this.privilegios);
      localStorage.setItem("nombre",this.nombre);

      console.log("Estoy en la computadora //"+this.token+" "+this.id_usuario+" "+this.nombre);


    }



  }

  cargar_storage(){

    let promesa = new Promise((resolve, reject)=>{

      if(this.platform.is("cordova")){
        //dispositivo

        this.storage.ready().then(()=>{

          this.storage.get("token").then(token=>{

            if(token){

              this.token=token;

            }



          })

          this.storage.get("rut").then(rut=>{

            if(rut){

              this.id_usuario=rut;

            }

            


          })

          this.storage.get("privilegios").then(privilegio=>{
            
                        if(privilegio){
            
                          this.privilegios=privilegio;
            
                        }
            
                        resolve();
            
            
                      })

                      this.storage.get("nombre").then(nombre=>{
            
                        if(nombre){
            
                          this.nombre=nombre;
            
                        }
            
                        resolve();
            
            
                      })


        })

        
        

      }else{

        //computadora

        if(localStorage.getItem("token")){
          this.token= localStorage.getItem("token");
          this.id_usuario=localStorage.getItem("rut");
          this.privilegios=localStorage.getItem("privilegios");
          this.nombre=localStorage.getItem("nombre");

          console.log("se carga "+this.token+" "+this.id_usuario+" "+this.privilegios+" "+this.nombre);


        }
        resolve();


      }



    });


  }






  

}
