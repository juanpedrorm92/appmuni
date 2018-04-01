import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertUserPage } from './insert-user';

@NgModule({
  declarations: [
    InsertUserPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertUserPage),
  ],
})
export class InsertUserPageModule {}
