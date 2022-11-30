import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnagregaracadComponent } from './btnagregaracad.component';

describe('BtnagregaracadComponent', () => {
  let component: BtnagregaracadComponent;
  let fixture: ComponentFixture<BtnagregaracadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnagregaracadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnagregaracadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
