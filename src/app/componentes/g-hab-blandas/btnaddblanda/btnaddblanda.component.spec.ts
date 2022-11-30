import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnaddblandaComponent } from './btnaddblanda.component';

describe('BtnaddblandaComponent', () => {
  let component: BtnaddblandaComponent;
  let fixture: ComponentFixture<BtnaddblandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnaddblandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnaddblandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
