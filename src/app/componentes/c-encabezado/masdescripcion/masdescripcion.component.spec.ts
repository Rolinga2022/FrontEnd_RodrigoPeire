import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasdescripcionComponent } from './masdescripcion.component';

describe('MasdescripcionComponent', () => {
  let component: MasdescripcionComponent;
  let fixture: ComponentFixture<MasdescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasdescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasdescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
