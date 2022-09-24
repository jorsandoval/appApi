import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacteridPage } from './characterid.page';

const routes: Routes = [
  {
    path: '',
    component: CharacteridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacteridPageRoutingModule {}
