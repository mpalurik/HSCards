import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardBackPage } from './card-back.page';

const routes: Routes = [
  {
    path: '',
    component: CardBackPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
