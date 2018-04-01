import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICO } from "../../app/config/url.service";

import { LoginService } from "../../providers/login/login";


import { AlertController,ToastController } from "ionic-angular";
import { LoginpagePage } from '../../pages/loginpage/loginpage';
import { preserveWhitespacesDefault } from '@angular/compiler/src/config';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  select_estab: any[]=[];
  select_cars: any[]=[];
  usuarios:any[]=[];

 

  constructor(public http: HttpClient,private toastCtrl:ToastController, private alertCtrl: AlertController, private slogin: LoginService) {
    console.log('Hello UsuarioProvider Provider');

    
  }

  cargar_estab(){

    let promesa = new Promise((resolve, reject)=>{

      let url= URL_SERVICO+"/establecimiento/estab";
      this.http.get(url).subscribe(data =>{

        if(data["error"]){
          //se produce un error 

        }else{

          let newCargaEstab= data["establecimiento"];
          this.select_estab.push(...newCargaEstab);

        

        }
        resolve();

      });




    });

    return promesa;




  }
  get_usuarios(){

    let promesa = new Promise((resolve, reject)=>{

      let url = URL_SERVICO+"/usuario/users";

      this.http.get(url).subscribe(data=>{


        if(data['error']){

          console.log("inconveniente en cargar los usuarios, revisar rest");

        }else{

          let carga_usuarios=data['usuarios'];
          
          this.usuarios.push(...carga_usuarios);

        }
        resolve();



      });

    });

    return promesa;

  }


  cargar_cars(){

    let promesa = new Promise((resolve, reject)=>{

      let url= URL_SERVICO+"/vehiculos/cars";

      this.http.get(url).subscribe(data=>{

        if(data['error']){

          console.log("UPS... hay un error en el id de cargar cars");

        }else{

          let get_data=data['vehiculo'];
          this.select_cars.push(...get_data);

        }
        resolve();



      });

    });

    return promesa;


  }

  registro_user(rut:string, nombre: string, apellidop: string, apellidom: string, direccion: string, user:string, pass: string, priv:string, establecimiento:string,vehiculo_asignado:string){




    let data = {
      rut: rut,
      nombre:nombre,
      apellidop: apellidop,
      apellidom: apellidom,
      direccion: direccion,
      user: user,
      pass: pass,
      priv:priv,
      establecimiento: establecimiento,
      vehiculo_asignado: vehiculo_asignado
      
    }

    let promesa= new Promise((resolve, reject)=>{


      let url = URL_SERVICO+"/usuario/registro/"+this.slogin.id_usuario+"/"+this.slogin.token;

      this.http.post(url,data).subscribe(resp =>{
  
  
        if(resp['error']){
  
          this.alertCtrl.create({
  
            title: "Ups, Do you do problem?",
            subTitle: resp['mensaje'],
            buttons: ["ok"]
  
          }).present()
  
  
  
  
        }else{
          console.log("registra");
        }

        resolve();
        
  
      });


    });

    
    
  
  }

  update_user(
    rut: string,
    nombre: string,
    apellidop: string,
    apellidom: string,
    direccion: string,
    user: string,
    pass: string,
    priv: any,
    establecimiento: any) {

      let data = {
        rut: rut,
        nombre:nombre,
        apellidop: apellidop,
        apellidom: apellidom,
        direccion: direccion,
        user: user,
        pass: pass,
        priv:priv,
        establecimiento: establecimiento
        
        
      }

      let promesa = new Promise((resolve , reject)=>{
      
        let url = URL_SERVICO+"/usuario/userUpdate/"+this.slogin.id_usuario+"/"+this.slogin.token;
        
        this.http.post(url,data).subscribe(resp =>{

          if (resp['error']) {

            this.alertCtrl.create({
              title: "UPS",
              subTitle: resp['mensaje'],
              buttons: ["Ok"]

            }).present();

          }else{

          let toast =  this.toastCtrl.create({
              message:"Los datos han sido actualizados",
              duration: 3000
            });

            toast.present();

          }

        });

      });
      



  }

 
  





}
