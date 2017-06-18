import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuFinanceiro } from './menu-financeiro';

@NgModule({
  declarations: [
    MenuFinanceiro,
  ],
  imports: [
    IonicPageModule.forChild(MenuFinanceiro),
  ],
  exports: [
    MenuFinanceiro
  ]
})
export class MenuPageModule {}
