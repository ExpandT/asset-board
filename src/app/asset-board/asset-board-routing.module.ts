import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssetBoardComponent} from "./asset-board.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asset-board',
    pathMatch: 'full',
  },
  {
    path: 'asset-board',
    component: AssetBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetBoardRoutingModule { }
