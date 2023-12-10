import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAgenceDivComponent } from './service-agence-div.component';

describe('ServiceAgenceDivComponent', () => {
  let component: ServiceAgenceDivComponent;
  let fixture: ComponentFixture<ServiceAgenceDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAgenceDivComponent]
    });
    fixture = TestBed.createComponent(ServiceAgenceDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
