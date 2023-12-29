import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCardPage } from './search-card.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
