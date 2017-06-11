import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TicketMedioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-ticket-medio',
  templateUrl: 'ticket-medio.html',
})
export class TicketMedioPage {

  pieChartLabel: string[] = ['CEUMA','EURO', 'FAMAZ', 'CEUPI', 'CESUP'];
  pieChartData: number[] = [192031.32,303209.2,103822.132,382713.2,21311.3];
  pieChartType: string = 'pie';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('ies'));
  }

  private _captureChartClick(event){
    if(typeof event.active[0] !== 'undefined'){
      const index = event.active[0]._chart.lastActive[0]._index;
      const label = event.active[0]._chart.config.data.labels[index];
      const number = event.active[0]._chart.config.data.datasets[0].data[index];

      let obj= {
        index: index,
        ies: label,
        valor: number
      }

      console.log(obj);
    }

  }
}
