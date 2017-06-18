import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketMedioDetails } from '../../pages/ticket-medio-details/ticket-medio-details'


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
export class TicketMedioPage2 {

  pieChartLabel: string[] = ['CEUMA','EURO', 'FAMAZ', 'CEUPI', 'CESUP'];
  pieChartData: number[] = [192031.32,303209.2,103822.132,382713.2,21311.3];
  pieChartType: string = 'pie';
  resumo: any;
  resumos = [];


  obj;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.resumos.push({ies: this.pieChartLabel[0], valor: 'R$ '+this.pieChartData[0].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")});
    this.resumos.push({ies: this.pieChartLabel[1], valor: 'R$ '+this.pieChartData[1].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")});
    this.resumos.push({ies: this.pieChartLabel[2], valor: 'R$ '+this.pieChartData[2].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")});
    this.resumos.push({ies: this.pieChartLabel[3], valor: 'R$ '+this.pieChartData[3].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")});
    this.resumos.push({ies: this.pieChartLabel[4], valor: 'R$ '+this.pieChartData[4].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")});
  }

 _captureChartClick(event){
    if(typeof event.active[0] !== 'undefined'){
      const index = event.active[0]._chart.lastActive[0]._index;
      const label = event.active[0]._chart.config.data.labels[index];
      const number = event.active[0]._chart.config.data.datasets[0].data[index];

      let obj= {
        index: index,
        ies: label,
        valor: number
      }
      this.navCtrl.push(TicketMedioDetails, {objChart: obj});
    }

  }
}
