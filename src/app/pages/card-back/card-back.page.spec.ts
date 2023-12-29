import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CardBackPage } from './card-back.page';

describe('Tab3Page', () => {
  let component: CardBackPage;
  let fixture: ComponentFixture<CardBackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBackPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CardBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
