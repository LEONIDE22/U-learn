import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormationsComponent } from './all-formations.component';

describe('AllFormationsComponent', () => {
  let component: AllFormationsComponent;
  let fixture: ComponentFixture<AllFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
