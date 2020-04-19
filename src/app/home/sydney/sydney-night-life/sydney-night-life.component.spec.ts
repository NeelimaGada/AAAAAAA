import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SydneyNightLifeComponent } from './sydney-night-life.component';

describe('SydneyNightLifeComponent', () => {
  let component: SydneyNightLifeComponent;
  let fixture: ComponentFixture<SydneyNightLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SydneyNightLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SydneyNightLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
