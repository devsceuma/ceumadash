import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketMedioPage } from './ticket-medio';

@NgModule({
  declarations: [
    TicketMedioPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketMedioPage),
  ],
  exports: [
    TicketMedioPage
  ]
})
export class TicketMedioPageModule {}
