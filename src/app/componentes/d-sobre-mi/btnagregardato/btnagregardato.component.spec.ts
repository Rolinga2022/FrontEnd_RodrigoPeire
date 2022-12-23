import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnagregardatoComponent } from './btnagregardato.component';

describe('BtnagregardatoComponent', () => {
  let component: BtnagregardatoComponent;
  let fixture: ComponentFixture<BtnagregardatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnagregardatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnagregardatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
