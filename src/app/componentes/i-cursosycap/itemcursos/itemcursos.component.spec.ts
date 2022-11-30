import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcursosComponent } from './itemcursos.component';

describe('ItemcursosComponent', () => {
  let component: ItemcursosComponent;
  let fixture: ComponentFixture<ItemcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
