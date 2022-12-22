import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnagregardescComponent } from './btnagregardesc.component';

describe('BtnagregardescComponent', () => {
  let component: BtnagregardescComponent;
  let fixture: ComponentFixture<BtnagregardescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnagregardescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnagregardescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
