import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifacademicaComponent } from './modifacademica.component';

describe('ModifacademicaComponent', () => {
  let component: ModifacademicaComponent;
  let fixture: ComponentFixture<ModifacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
