import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemhabblandaComponent } from './itemhabblanda.component';

describe('ItemhabblandaComponent', () => {
  let component: ItemhabblandaComponent;
  let fixture: ComponentFixture<ItemhabblandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemhabblandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemhabblandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
