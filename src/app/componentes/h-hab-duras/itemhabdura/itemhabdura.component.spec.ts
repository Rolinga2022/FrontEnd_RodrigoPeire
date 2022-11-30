import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemhabduraComponent } from './itemhabdura.component';

describe('ItemhabduraComponent', () => {
  let component: ItemhabduraComponent;
  let fixture: ComponentFixture<ItemhabduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemhabduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemhabduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
