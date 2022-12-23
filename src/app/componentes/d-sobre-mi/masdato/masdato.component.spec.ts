import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasdatoComponent } from './masdato.component';

describe('MasdatoComponent', () => {
  let component: MasdatoComponent;
  let fixture: ComponentFixture<MasdatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasdatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasdatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
