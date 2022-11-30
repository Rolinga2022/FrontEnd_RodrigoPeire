import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEncabezadoComponent } from './c-encabezado.component';

describe('CEncabezadoComponent', () => {
  let component: CEncabezadoComponent;
  let fixture: ComponentFixture<CEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
