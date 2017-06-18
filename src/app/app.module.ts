import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TicketMedioPage} from  '../pages/ticket-medio/ticket-medio';
import {TicketMedioPage2} from  '../pages/ticket-medio2/ticket-medio';
import { TicketMedioDetails } from '../pages/ticket-medio-details/ticket-medio-details'; 
import {MenuFinanceiro} from '../pages/menu/menu-financeiro/menu-financeiro';
import {MenuPrincipal } from '../pages/menu/menu-principal/menu-principal';
import {ChartsModule} from 'ng2-charts/charts/charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TicketMedioPage,
    MenuFinanceiro,
    MenuPrincipal,
    TicketMedioPage2,
    TicketMedioDetails
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TicketMedioPage,
    MenuFinanceiro,
    MenuPrincipal,
    TicketMedioPage2,
    TicketMedioDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
