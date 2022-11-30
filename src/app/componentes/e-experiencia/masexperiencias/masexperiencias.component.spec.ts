import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasexperienciasComponent } from './masexperiencias.component';

describe('MasexperienciasComponent', () => {
  let component: MasexperienciasComponent;
  let fixture: ComponentFixture<MasexperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasexperienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasexperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
