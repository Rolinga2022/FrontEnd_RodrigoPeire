import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JPortfolioComponent } from './j-portfolio.component';

describe('JPortfolioComponent', () => {
  let component: JPortfolioComponent;
  let fixture: ComponentFixture<JPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
