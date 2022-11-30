import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHabDurasComponent } from './h-hab-duras.component';

describe('HHabDurasComponent', () => {
  let component: HHabDurasComponent;
  let fixture: ComponentFixture<HHabDurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HHabDurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHabDurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
