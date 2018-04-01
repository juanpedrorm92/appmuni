import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from "../../providers/login/login";
import { TabsConductorPage } from "../tabs-conductor/tabs-conductor";

/**
 * Generated class for the ConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conductor',
  templateUrl: 'conductor.html',
})
export class ConductorPage {
  
  constructor(public navCtrl: NavController,private lservice: LoginService, public navParams: NavParams) {


    
   
  }

  

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ConductorPage');
   
  }

}
