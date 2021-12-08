import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PediatriaPage } from './pediatria.page';

const routes: Routes = [
  {
    path: '',
    component: PediatriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PediatriaPageRoutingModule {}
