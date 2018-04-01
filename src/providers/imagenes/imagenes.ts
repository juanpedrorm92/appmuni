import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_IMAGENES,URL_SERVICO } from "../../app/config/url.service";

/*
  Generated class for the ImagenesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagenesProvider {

  vehiculoImagen : any [] = [];

  constructor(public http: HttpClient) {
    console.log('Hello ImagenesProvider Provider');
  }


  cargar_imgCars(){

    let promesa = new Promise((resolve,reject)=>{

      let url = URL_SERVICO+"/img/vehiculos";

      this.http.get(url).subscribe(data =>{

        if(data["error"]){
          //aqui hay un error

        }else{

          let nuevaData= data["imagen"];
          this.vehiculoImagen.push(...nuevaData);


        }
        resolve();

        


      });





    });

    return promesa;


  }

}
