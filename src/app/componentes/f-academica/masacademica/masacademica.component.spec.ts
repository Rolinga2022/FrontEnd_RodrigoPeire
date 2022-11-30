import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasacademicaComponent } from './masacademica.component';

describe('MasacademicaComponent', () => {
  let component: MasacademicaComponent;
  let fixture: ComponentFixture<MasacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
