import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyWorkComponent } from './early-work.component';

describe('EarlyWorkComponent', () => {
  let component: EarlyWorkComponent;
  let fixture: ComponentFixture<EarlyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
