import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LContactoComponent } from './l-contacto.component';

describe('LContactoComponent', () => {
  let component: LContactoComponent;
  let fixture: ComponentFixture<LContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
