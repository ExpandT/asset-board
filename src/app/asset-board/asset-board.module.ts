import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetBoardRoutingModule } from './asset-board-routing.module';
import { AssetControlModalComponent } from './asset-control-modal/asset-control-modal.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AssetControlModalComponent
  ],
  imports: [
    CommonModule,
    AssetBoardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AssetBoardModule { }
