import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EExperienciaComponent } from './e-experiencia.component';

describe('EExperienciaComponent', () => {
  let component: EExperienciaComponent;
  let fixture: ComponentFixture<EExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
