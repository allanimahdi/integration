import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevMenuComponent} from './dev-menu.component';
import {CardTileComponent} from '../directives/card-tile/card-tile.component';
import {CardTileHorizentalComponent} from '../directives/card-tile-horizental/card-tile-horizental.component';



@NgModule({
  declarations: [DevMenuComponent, CardTileComponent, CardTileHorizentalComponent],
  imports: [
    CommonModule
  ]
})
export class DevMenuModule { }
