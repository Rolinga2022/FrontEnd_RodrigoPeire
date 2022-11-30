import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliorpComponent } from './portfoliorp.component';

describe('PortfoliorpComponent', () => {
  let component: PortfoliorpComponent;
  let fixture: ComponentFixture<PortfoliorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliorpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
