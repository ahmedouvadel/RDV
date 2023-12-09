import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInterfaceComponent } from './ui-interface.component';

describe('UiInterfaceComponent', () => {
  let component: UiInterfaceComponent;
  let fixture: ComponentFixture<UiInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiInterfaceComponent]
    });
    fixture = TestBed.createComponent(UiInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
