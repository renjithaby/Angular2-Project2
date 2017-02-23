/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyBasketComponent } from './my-basket.component';

describe('MyBasketComponent', () => {
  let component: MyBasketComponent;
  let fixture: ComponentFixture<MyBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
