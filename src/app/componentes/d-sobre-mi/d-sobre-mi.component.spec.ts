import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSobreMiComponent } from './d-sobre-mi.component';

describe('DSobreMiComponent', () => {
  let component: DSobreMiComponent;
  let fixture: ComponentFixture<DSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
