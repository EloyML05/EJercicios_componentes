/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RamdomNComponent } from './RamdomN.component';

describe('RamdomNComponent', () => {
  let component: RamdomNComponent;
  let fixture: ComponentFixture<RamdomNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamdomNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamdomNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
