/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StringFormaterComponent } from './String-Formater.component';

describe('StringFormaterComponent', () => {
  let component: StringFormaterComponent;
  let fixture: ComponentFixture<StringFormaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringFormaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringFormaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
