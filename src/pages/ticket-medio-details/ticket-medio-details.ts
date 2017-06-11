import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  pieChartLabel: string[] = [];
  pieChartData: number[] = [];
  pieChartType: string = 'pie';

  constructor(private navController:NavController, private navParams: NavParams){
    switch(this.navParams.get('objChart').index){
      case 0:
        this.pieChartLabel = ['RENASCENÇA','DEODORO', 'TURU', 'ANIL', 'COHAMA','IMPERATRIZ','BACABAL'];
        this.pieChartData = [234,4344,2455,565,6565,2323,4566];
      break;
      case 1:
        this.pieChartLabel = ['ASA SUL','ASA NORTE', 'ÁGUAS CLARAS'];
        this.pieChartData = [234,2344,2455];
      break;
      case 2:
        this.pieChartLabel = ['FAMAZ DOCAS'];
        this.pieChartData = [234];
      break;
      case 3:
        this.pieChartLabel = ['CEUPI'];
        this.pieChartData = [3456];
      break;
      case 4:
        this.pieChartLabel = ['CESUP'];
        this.pieChartData = [6768];
      break;
    }
  }

    
  
 
}
