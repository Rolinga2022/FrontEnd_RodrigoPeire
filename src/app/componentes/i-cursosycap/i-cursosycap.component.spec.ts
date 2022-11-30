import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICursosycapComponent } from './i-cursosycap.component';

describe('ICursosycapComponent', () => {
  let component: ICursosycapComponent;
  let fixture: ComponentFixture<ICursosycapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICursosycapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICursosycapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
