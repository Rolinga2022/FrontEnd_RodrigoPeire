import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemacademicoComponent } from './itemacademico.component';

describe('ItemacademicoComponent', () => {
  let component: ItemacademicoComponent;
  let fixture: ComponentFixture<ItemacademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemacademicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemacademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
