import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlackComponent } from './nav-black.component';

describe('NavBlackComponent', () => {
  let component: NavBlackComponent;
  let fixture: ComponentFixture<NavBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
