import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemexperienciaComponent } from './itemexperiencia.component';

describe('ItemexperienciaComponent', () => {
  let component: ItemexperienciaComponent;
  let fixture: ComponentFixture<ItemexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
