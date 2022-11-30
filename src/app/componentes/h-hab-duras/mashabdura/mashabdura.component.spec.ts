import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashabduraComponent } from './mashabdura.component';

describe('MashabduraComponent', () => {
  let component: MashabduraComponent;
  let fixture: ComponentFixture<MashabduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MashabduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MashabduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
