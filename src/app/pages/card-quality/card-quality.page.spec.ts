import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CardQualityPage } from './card-quality.page';

describe('Tab2Page', () => {
  let component: CardQualityPage;
  let fixture: ComponentFixture<CardQualityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardQualityPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CardQualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
