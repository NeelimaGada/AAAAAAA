import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToShopComponent } from './place-to-shop.component';

describe('PlaceToShopComponent', () => {
  let component: PlaceToShopComponent;
  let fixture: ComponentFixture<PlaceToShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceToShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceToShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
