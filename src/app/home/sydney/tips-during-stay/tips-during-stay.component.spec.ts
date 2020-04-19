import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsDuringStayComponent } from './tips-during-stay.component';

describe('TipsDuringStayComponent', () => {
  let component: TipsDuringStayComponent;
  let fixture: ComponentFixture<TipsDuringStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsDuringStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsDuringStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
