import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnagregarComponent } from './btnagregar.component';

describe('BtnagregarComponent', () => {
  let component: BtnagregarComponent;
  let fixture: ComponentFixture<BtnagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnagregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
