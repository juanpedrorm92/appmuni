import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Http Client

import { HttpClientModule } from '@angular/common/http';


//StorageModule

import { IonicStorageModule } from '@ionic/storage';

//porviders
import { LoginService } from "../providers/login/login";
import { ImagenesProvider } from "../providers/imagenes/imagenes";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AdminPage } from "../pages/admin/admin";
import { InsertUserPage } from "../pages/insert-user/insert-user";
import { SearchUserPage } from "../pages/search-user/search-user";
import { EditUsuarioPage } from "../pages/edit-usuario/edit-usuario";
import { ImagenPipe } from "../pipes/imagen/imagen";
import { TabsConductorPage } from "../pages/tabs-conductor/tabs-conductor";
import { MantencionesPage } from "../pages/mantenciones/mantenciones";
import { EstadoRutaPage } from "../pages/estado-ruta/estado-ruta";
import { RutaPage } from "../pages/ruta/ruta";


import { UsuarioProvider } from '../providers/usuario/usuario';


@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    HomePage,
    AdminPage,
    InsertUserPage,
    SearchUserPage,
    EditUsuarioPage,
    TabsConductorPage,
    EstadoRutaPage,
    MantencionesPage,
    RutaPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,  
    InsertUserPage,
    SearchUserPage,
    EditUsuarioPage,
    TabsConductorPage,
    MantencionesPage,
    EstadoRutaPage,
    RutaPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagenesProvider,
    LoginService,
    UsuarioProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
