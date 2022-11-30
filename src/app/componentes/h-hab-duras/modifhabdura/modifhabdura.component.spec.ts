import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifhabduraComponent } from './modifhabdura.component';

describe('ModifhabduraComponent', () => {
  let component: ModifhabduraComponent;
  let fixture: ComponentFixture<ModifhabduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifhabduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifhabduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
