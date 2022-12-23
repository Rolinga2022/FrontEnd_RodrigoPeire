import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifdatoComponent } from './modifdato.component';

describe('ModifdatoComponent', () => {
  let component: ModifdatoComponent;
  let fixture: ComponentFixture<ModifdatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifdatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifdatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
