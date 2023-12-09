import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIdentifVoitureComponent } from './ui-identif-voiture.component';

describe('UiIdentifVoitureComponent', () => {
  let component: UiIdentifVoitureComponent;
  let fixture: ComponentFixture<UiIdentifVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiIdentifVoitureComponent]
    });
    fixture = TestBed.createComponent(UiIdentifVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
