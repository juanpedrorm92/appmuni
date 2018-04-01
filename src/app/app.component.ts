import { Component } from '@angular/core';
import { Platform, Tab } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AdminPage } from "../pages/admin/admin";
import { LoginService } from "../providers/login/login";
import { InsertUserPage } from "../pages/insert-user/insert-user";
import { SearchUserPage } from "../pages/search-user/search-user";
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { TabsConductorPage } from "../pages/tabs-conductor/tabs-conductor";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pageInsertUser=InsertUserPage;
  ajustes2=TabsConductorPage;
  searchUser= SearchUserPage;
  rootPage:any;
  privilegio:string="";
  

  constructor(platform: Platform, statusBar: StatusBar,private ctrlMenu: MenuController ,splashScreen: SplashScreen,private lservice:LoginService) {
    platform.ready().then(() => {
      

      if(this.lservice.activo()==true){

        

        this.privilegio = this.lservice.priv();

        if(this.privilegio=="1"){
          this.rootPage=AdminPage;
          console.log(this.lservice.activo()+this.lservice.priv());
        }
        if(this.privilegio=="2"){

          this.rootPage=TabsConductorPage;
        
        
        }
        

        
      }if(this.lservice.activo()==false){
        this.rootPage=HomePage;
        
      }

      statusBar.styleDefault();
      splashScreen.hide();
      
     
    });
  }

  abrirPaginas(params:any){

    this.rootPage=params;
    this.ctrlMenu.close();


  }
}

