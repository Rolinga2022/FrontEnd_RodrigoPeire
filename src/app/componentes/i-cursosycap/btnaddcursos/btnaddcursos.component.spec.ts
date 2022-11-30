import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnaddcursosComponent } from './btnaddcursos.component';

describe('BtnaddcursosComponent', () => {
  let component: BtnaddcursosComponent;
  let fixture: ComponentFixture<BtnaddcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnaddcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnaddcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
