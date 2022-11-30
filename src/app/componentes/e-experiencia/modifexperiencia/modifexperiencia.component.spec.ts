import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifexperienciaComponent } from './modifexperiencia.component';

describe('ModifexperienciaComponent', () => {
  let component: ModifexperienciaComponent;
  let fixture: ComponentFixture<ModifexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
