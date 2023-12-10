import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAgenceComponent } from './service-agence.component';

describe('ServiceAgenceComponent', () => {
  let component: ServiceAgenceComponent;
  let fixture: ComponentFixture<ServiceAgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAgenceComponent]
    });
    fixture = TestBed.createComponent(ServiceAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
