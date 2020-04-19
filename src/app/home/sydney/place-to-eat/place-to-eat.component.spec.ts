import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToEatComponent } from './place-to-eat.component';

describe('PlaceToEatComponent', () => {
  let component: PlaceToEatComponent;
  let fixture: ComponentFixture<PlaceToEatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceToEatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceToEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
