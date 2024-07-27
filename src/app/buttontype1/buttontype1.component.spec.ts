import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttontype1Component } from './buttontype1.component';

describe('Buttontype1Component', () => {
  let component: Buttontype1Component;
  let fixture: ComponentFixture<Buttontype1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Buttontype1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttontype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
