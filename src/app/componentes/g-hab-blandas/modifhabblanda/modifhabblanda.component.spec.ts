import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifhabblandaComponent } from './modifhabblanda.component';

describe('ModifhabblandaComponent', () => {
  let component: ModifhabblandaComponent;
  let fixture: ComponentFixture<ModifhabblandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifhabblandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifhabblandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
