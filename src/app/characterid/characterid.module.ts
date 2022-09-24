import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacteridPageRoutingModule } from './characterid-routing.module';

import { CharacteridPage } from './characterid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacteridPageRoutingModule
  ],
  declarations: [CharacteridPage]
})
export class CharacteridPageModule {}
