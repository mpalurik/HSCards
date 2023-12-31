import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardQualityPage } from './card-quality.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './card-quality-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [CardQualityPage]
})
export class Tab2PageModule {}
