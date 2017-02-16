/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaveListIconComponent } from './save-list-icon.component';

describe('SaveListIconComponent', () => {
  let component: SaveListIconComponent;
  let fixture: ComponentFixture<SaveListIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveListIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveListIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
