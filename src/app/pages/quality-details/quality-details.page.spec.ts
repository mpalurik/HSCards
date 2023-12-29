import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualityDetailsPage } from './quality-details.page';

describe('QualityDetailsPage', () => {
  let component: QualityDetailsPage;
  let fixture: ComponentFixture<QualityDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QualityDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
