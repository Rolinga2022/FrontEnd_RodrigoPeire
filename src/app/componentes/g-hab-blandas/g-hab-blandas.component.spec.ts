import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GHabBlandasComponent } from './g-hab-blandas.component';

describe('GHabBlandasComponent', () => {
  let component: GHabBlandasComponent;
  let fixture: ComponentFixture<GHabBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GHabBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GHabBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
