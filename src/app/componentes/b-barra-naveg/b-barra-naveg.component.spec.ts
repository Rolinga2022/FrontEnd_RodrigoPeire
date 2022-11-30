import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBarraNavegComponent } from './b-barra-naveg.component';

describe('BBarraNavegComponent', () => {
  let component: BBarraNavegComponent;
  let fixture: ComponentFixture<BBarraNavegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BBarraNavegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BBarraNavegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
