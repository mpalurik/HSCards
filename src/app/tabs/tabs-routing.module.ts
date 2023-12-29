import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search-card',
        loadChildren: () => import('../pages/search-card/search-card.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'card-quality',
        loadChildren: () => import('../pages/card-quality/card-quality.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'card-back',
        loadChildren: () => import('../pages/card-back/card-back.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/search-card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/search-card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
