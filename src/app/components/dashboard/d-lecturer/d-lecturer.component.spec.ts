import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLecturerComponent } from './d-lecturer.component';

describe('DLecturerComponent', () => {
  let component: DLecturerComponent;
  let fixture: ComponentFixture<DLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLecturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
