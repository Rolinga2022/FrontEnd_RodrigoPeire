import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascursosComponent } from './mascursos.component';

describe('MascursosComponent', () => {
  let component: MascursosComponent;
  let fixture: ComponentFixture<MascursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
