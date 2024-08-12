import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequiredPopUpComponent } from './login-required-pop-up.component';

describe('LoginRequiredPopUpComponent', () => {
  let component: LoginRequiredPopUpComponent;
  let fixture: ComponentFixture<LoginRequiredPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRequiredPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRequiredPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
