import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {TicketMedioPage} from '../../ticket-medio/ticket-medio';
import { MenuFinanceiro } from '../menu-financeiro/menu-financeiro';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipal {

  ies:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  loadDashBoard(type: string){
    if(type === 'TICKET_MEDIO')
      this.navCtrl.push(MenuFinanceiro);
  }

}
