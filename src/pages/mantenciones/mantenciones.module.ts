import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MantencionesPage } from './mantenciones';

@NgModule({
  declarations: [
    MantencionesPage,
  ],
  imports: [
    IonicPageModule.forChild(MantencionesPage),
  ],
})
export class MantencionesPageModule {}
