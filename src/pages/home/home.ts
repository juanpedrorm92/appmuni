import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from "../../providers/login/login";

import { AdminPage } from "../../pages/admin/admin";
import { TabsConductorPage } from "../tabs-conductor/tabs-conductor";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  usuario:string="";
  contrasena:string="";
  nombre_usuario:string;

  constructor(public navCtrl: NavController, private lservice: LoginService) {

 

  }

  ingresar(){
    

    this.lservice.ingresar(this.usuario,this.contrasena).subscribe(()=>{
      
      this.nombre_usuario=this.lservice.nombre;

      if(this.lservice.activo()){

        if(this.lservice.priv()=="1"){
          this.navCtrl.push(AdminPage,{"nombre_usuario":this.nombre_usuario});
          
        }if(this.lservice.priv()=="2"){
          this.navCtrl.push(TabsConductorPage,{"nombre_usuario":this.nombre_usuario});
        }
  
        
  
  
  
      }
  
  


    });


  }
  



}
