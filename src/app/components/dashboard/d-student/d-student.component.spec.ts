import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DStudentComponent } from './d-student.component';

describe('DStudentComponent', () => {
  let component: DStudentComponent;
  let fixture: ComponentFixture<DStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
