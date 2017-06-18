import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketMedioPage2 } from './ticket-medio';

@NgModule({
  declarations: [
    TicketMedioPage2,
  ],
  imports: [
    IonicPageModule.forChild(TicketMedioPage2),
  ],
  exports: [
    TicketMedioPage2
  ]
})
export class TicketMedioPageModule {}
