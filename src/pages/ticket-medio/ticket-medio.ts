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
export class TicketMedioPage {

  retornoJson = {
    codCurso: ['01', '02', '03', '04', '05', '06'],
    nomeCurso: ["Medicina", "Bio Medicina", "Odontologia", "Famacia", "Direito", "Sistemas de Informação"],
    valorCurso: [3400, 5678, 6500, 10000, 8005, 7000]
  }

  resumos = [];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = this.retornoJson.codCurso;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: this.retornoJson.valorCurso, label: 'Cursos' }
  ];


  ionViewDidLoad() {
    this.resumos.push({ cod: this.retornoJson.codCurso[0], curso: this.retornoJson.nomeCurso[0], valor: 'R$ '+this.retornoJson.valorCurso[0].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
    this.resumos.push({ cod: this.retornoJson.codCurso[1], curso: this.retornoJson.nomeCurso[1], valor: 'R$ '+this.retornoJson.valorCurso[1].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
    this.resumos.push({ cod: this.retornoJson.codCurso[2], curso: this.retornoJson.nomeCurso[2], valor: 'R$ '+this.retornoJson.valorCurso[2].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
    this.resumos.push({ cod: this.retornoJson.codCurso[3], curso: this.retornoJson.nomeCurso[3], valor: 'R$ '+this.retornoJson.valorCurso[3].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
    this.resumos.push({ cod: this.retornoJson.codCurso[4], curso: this.retornoJson.nomeCurso[4], valor: 'R$ '+this.retornoJson.valorCurso[4].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
    this.resumos.push({ cod: this.retornoJson.codCurso[5], curso: this.retornoJson.nomeCurso[5], valor: 'R$ '+this.retornoJson.valorCurso[5].toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") });
  }

}
