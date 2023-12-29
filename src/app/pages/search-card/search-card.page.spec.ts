import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SearchCardPage } from './search-card.page';

describe('Tab1Page', () => {
  let component: SearchCardPage;
  let fixture: ComponentFixture<SearchCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCardPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
