import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSydneyComponent } from './about-sydney.component';

describe('AboutSydneyComponent', () => {
  let component: AboutSydneyComponent;
  let fixture: ComponentFixture<AboutSydneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSydneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSydneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
