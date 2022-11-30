import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashabblandaComponent } from './mashabblanda.component';

describe('MashabblandaComponent', () => {
  let component: MashabblandaComponent;
  let fixture: ComponentFixture<MashabblandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MashabblandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MashabblandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
