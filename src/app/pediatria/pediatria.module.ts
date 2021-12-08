import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PediatriaPageRoutingModule } from './pediatria-routing.module';

import { PediatriaPage } from './pediatria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PediatriaPageRoutingModule
  ],
  declarations: [PediatriaPage]
})
export class PediatriaPageModule {}
