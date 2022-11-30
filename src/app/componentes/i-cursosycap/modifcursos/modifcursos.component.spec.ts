import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcursosComponent } from './modifcursos.component';

describe('ModifcursosComponent', () => {
  let component: ModifcursosComponent;
  let fixture: ComponentFixture<ModifcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
