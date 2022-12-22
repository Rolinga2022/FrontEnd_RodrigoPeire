import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifdescripcionComponent } from './modifdescripcion.component';

describe('ModifdescripcionComponent', () => {
  let component: ModifdescripcionComponent;
  let fixture: ComponentFixture<ModifdescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifdescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifdescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
