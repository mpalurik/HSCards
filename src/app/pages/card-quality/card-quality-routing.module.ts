import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardQualityPage } from './card-quality.page';

const routes: Routes = [
  {
    path: '',
    component: CardQualityPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
