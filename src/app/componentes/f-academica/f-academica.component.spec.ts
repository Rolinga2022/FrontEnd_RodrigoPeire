import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAcademicaComponent } from './f-academica.component';

describe('FAcademicaComponent', () => {
  let component: FAcademicaComponent;
  let fixture: ComponentFixture<FAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAcademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
