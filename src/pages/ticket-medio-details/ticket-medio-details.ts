import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TicketMedioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-ticket-medio-details',
  templateUrl: 'ticket-medio-details.html',
})
export class TicketMedioDetails {

  constructor(private navController:NavController, private navParams: NavParams){

  }

  ionViewDidLoad() {
    console.log(this.navParams.get('objChart'));
  }
 
}
