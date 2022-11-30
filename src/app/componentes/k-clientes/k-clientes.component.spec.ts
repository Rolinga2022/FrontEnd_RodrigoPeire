import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KClientesComponent } from './k-clientes.component';

describe('KClientesComponent', () => {
  let component: KClientesComponent;
  let fixture: ComponentFixture<KClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
