import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnaddduraComponent } from './btnadddura.component';

describe('BtnaddduraComponent', () => {
  let component: BtnaddduraComponent;
  let fixture: ComponentFixture<BtnaddduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnaddduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnaddduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
